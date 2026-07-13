import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { business } from "@/data/business";

// Runs on the Node.js runtime (Firebase App Hosting / Cloud Run).
export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(100),
  phone: z.string().min(7, "Please enter a valid phone number").max(30),
  email: z.string().email("Please enter a valid email"),
  reg: z.string().max(15).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(5, "Please add a few details").max(2000),
  // Honeypot — handled explicitly below (silent success), so accept any value here.
  company: z.string().max(200).optional(),
});

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check your details.";
    return NextResponse.json({ error: first }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot triggered — pretend success so bots don't learn anything.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL || business.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Amor's Website <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const summary = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Vehicle reg", data.reg || "—"],
    ["Service", data.service || "—"],
    ["Message", data.message],
  ] as const;

  // If email isn't configured yet, log the enquiry and still succeed so the
  // form works in development. Wire up RESEND_API_KEY for live delivery.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — enquiry logged but not emailed:",
      Object.fromEntries(summary),
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const html = `
      <h2>New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${summary
          .map(
            ([k, v]) =>
              `<tr><td style="font-weight:bold;vertical-align:top">${k}</td><td>${escapeHtml(
                String(v),
              ).replace(/\n/g, "<br>")}</td></tr>`,
          )
          .join("")}
      </table>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New enquiry from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please call us instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call us instead." },
      { status: 500 },
    );
  }
}
