import Image from "next/image";
import logo from "../../public/amorslogo.webp";
import { business } from "@/data/business";

// Brand emblem. Height is controlled by the caller via `className` (e.g. `h-9`);
// the square badge sizes its width automatically.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt={`${business.name} logo`}
      preload
      className={`w-auto ${className}`}
    />
  );
}
