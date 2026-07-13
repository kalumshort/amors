import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { services, getService } from "@/data/services";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Amor's Tyres and Servicing";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return renderOgImage({
    eyebrow: "Mobile service",
    title: service ? service.name : "Our Services",
  });
}
