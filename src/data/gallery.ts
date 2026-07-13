// Homepage "Our work" gallery. Images are statically imported so next/image gets
// real dimensions + an automatic blur placeholder (used by the slideshow letterbox).
import type { StaticImageData } from "next/image";

import work01 from "../../public/gallery/work-01.jpg";
import work02 from "../../public/gallery/work-02.jpg";
import work03 from "../../public/gallery/work-03.jpg";
import work04 from "../../public/gallery/work-04.jpg";
import work05 from "../../public/gallery/work-05.jpg";
import work06 from "../../public/gallery/work-06.jpg";
import work07 from "../../public/gallery/work-07.jpg";
import work08 from "../../public/gallery/work-08.jpg";
import work09 from "../../public/gallery/work-09.jpg";
import work10 from "../../public/gallery/work-10.jpg";
import work11 from "../../public/gallery/work-11.jpg";
import work12 from "../../public/gallery/work-12.jpg";

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
};

const sources: StaticImageData[] = [
  work01, work02, work03, work04, work05, work06,
  work07, work08, work09, work10, work11, work12,
];

export const gallery: GalleryImage[] = sources.map((src, i) => ({
  src,
  alt: `Amor's Tyres and Servicing — mobile tyre fitting and vehicle work in Bristol (photo ${i + 1})`,
}));
