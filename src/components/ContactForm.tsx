"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { services } from "@/data/services";
import { business, telHref } from "@/data/business";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand focus-visible:outline-none";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-soft p-8 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-ink">Message sent</h3>
        <p className="mt-2 text-ink/70">
          Thanks for getting in touch — we&rsquo;ll get back to you shortly. Need
          us urgently?{" "}
          <a href={telHref} className="font-semibold text-brand-dark underline">
            Call {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
      noValidate
    >
      {/* Honeypot — hidden from users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={field}
            autoComplete="tel"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            autoComplete="email"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="reg">
            Vehicle reg{" "}
            <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <input id="reg" name="reg" className={field} placeholder="e.g. AB12 CDE" />
        </div>
      </div>

      <div className="mt-4">
        <label className={labelCls} htmlFor="service">
          What do you need?
        </label>
        <select id="service" name="service" className={field} defaultValue="">
          <option value="" disabled>
            Choose a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other / not sure">Other / not sure</option>
        </select>
      </div>

      <div className="mt-4">
        <label className={labelCls} htmlFor="message">
          Message / details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={field}
          placeholder="Tell us your location, vehicle and what's needed…"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error} You can also call us on{" "}
          <a href={telHref} className="font-semibold underline">
            {business.phoneDisplay}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_rgba(242,107,29,0.35)] transition-all hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request a callback"}
        {status !== "submitting" && <Icon name="arrow" className="h-5 w-5" />}
      </button>

      <p className="mt-4 text-xs text-ink/45">
        By submitting you agree to be contacted about your enquiry. We never
        share your details.
      </p>
    </form>
  );
}
