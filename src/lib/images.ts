import me from "../../public/me.jpg"
import analdo from "../../public/banner.jpg";
import my from "../../public/my.jpg";
import active from "../../public/active.jpg";
import myOn from "../../public/myOn.jpg";
import us from "../../public/us.jpg";
import people from "../../public/people.jpg";
import talk from "../../public/talk.jpg";

// Award images
import diHack from "../../public/Di Hack.jpeg";
import gragra from "../../public/gragra.jpeg";
import graduaNissi from "../../public/gradua - i & Nissi.jpeg";

// add more as needed

export const NOONES_IMAGES = [
  { src: my, alt: "Accra meetup — Q&A" },
  { src: me, alt: "Accra meetup — group photo" },
  { src: analdo, alt: "Accra meetup — group photo" },
  { src: active, alt: "Accra meetup — group photo" },
  { src: myOn, alt: "Accra meetup — group photo" },
  { src: us, alt: "Accra meetup — group photo" },
  { src: people, alt: "Accra meetup — group photo" },
  { src: talk, alt: "Accra meetup — group photo" },

] as const;

// Awards gallery
import type { StaticImageData } from "next/image";
export type GalleryImage = { src: StaticImageData | string; alt: string };
export const AWARD_IMAGES: GalleryImage[] = [
  { src: diHack, alt: "DI-HACK 1st Runner-Up — 2024" },
  { src: gragra, alt: "Graduation Award — 2024" },
  { src: graduaNissi, alt: "Most Innovative Project — 2025" },
  { src: "/ghananews.png", alt: "Ghana News feature — 2025" },
];