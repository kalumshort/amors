import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { locations, getLocation } from "@/data/locations";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Amor's Tyres and Servicing";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  return renderOgImage({
    eyebrow: "We come to you",
    title: loc ? `Mobile tyres & servicing in ${loc.name}` : "Areas we cover",
  });
}
