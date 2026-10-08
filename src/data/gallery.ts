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

export const gallery: GalleryImage[] = [
  {
    src: work01,
    alt: "Used oil filter being lifted out of an engine during a mobile car service",
  },
  {
    src: work02,
    alt: "Flat front tyre on a Hyundai parked on a block-paved driveway",
  },
  {
    src: work03,
    alt: "Audi tyre with a shredded sidewall after being driven on flat",
  },
  {
    src: work04,
    alt: "Ford Fiesta on a trolley jack with a front wheel removed, the Amor's Tyres and Servicing van behind",
  },
  {
    src: work05,
    alt: "Destroyed tyre removed from its wheel after a blowout",
  },
  {
    src: work06,
    alt: "Technician fitting a new tyre on the tyre machine inside the mobile fitting van",
  },
  {
    src: work07,
    alt: "New suspension arm laid next to the worn one it replaced",
  },
  {
    src: work08,
    alt: "Hyundai i10 with the bonnet up and an oil drain pan underneath during a mobile service",
  },
  {
    src: work09,
    alt: "Two Minis being worked on beside the Amor's van, one under a gazebo in the rain",
  },
  {
    src: work10,
    alt: "Amor's Tyres and Servicing van parked next to a customer's car with its bonnet open on a driveway",
  },
  {
    src: work11,
    alt: "Volkswagen Up with the bonnet raised and an oil drain pan underneath during a home service",
  },
  {
    src: work12,
    alt: "Technician removing a wheel from a Mercedes at the kerbside",
  },
];
