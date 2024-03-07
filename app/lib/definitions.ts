import { StaticImageData } from "next/image";

export type Link = {
    name: string;
    imageSrc: StaticImageData;
    url: string;
};