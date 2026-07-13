import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Amor's Tyres and Servicing — mobile tyres & vehicle servicing";

export default function Image() {
  return renderOgImage({
    eyebrow: "Mobile · We come to you",
    title: "Mobile tyres & servicing across Bristol",
  });
}
