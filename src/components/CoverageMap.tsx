import { business } from "@/data/business";

type Props = {
  lat?: number;
  lng?: number;
  label?: string;
  /** Half-width of the map view in degrees (roughly the zoom) */
  spread?: number;
  className?: string;
};

// Keyless OpenStreetMap embed — no API token required. Centred on the given
// coordinates with a marker.
export function CoverageMap({
  lat = business.geo.lat,
  lng = business.geo.lng,
  label = business.baseCity,
  spread = 0.25,
  className = "",
}: Props) {
  const latSpread = spread * 0.65;
  const bbox = [lng - spread, lat - latSpread, lng + spread, lat + latSpread]
    .map((n) => n.toFixed(4))
    .join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-mist ${className}`}
    >
      <iframe
        title={`Map of our coverage around ${label}`}
        src={src}
        loading="lazy"
        className="h-full min-h-[320px] w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
