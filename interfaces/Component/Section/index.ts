import { StaticImageData } from 'next/image'

export interface IHeroSection {
    heading: string;
    taglineBody: string;
    image: string | StaticImageData;
    imageAlt: string;
    cta?: string;
    ctaHref?: string;
    ctaButtonColor?: string;
    ctaAlt?: string;
    reverseOrder?: boolean;
    imageClassName?: string;
}

export interface IHeroGradient {
    heading: string;
    taglineBody: string;
    image: string | StaticImageData;
    imageAlt: string;
    cta?: string;
    ctaHref?: string;
    ctaButtonColor?: string;
    ctaAlt?: string;
    reverseOrder?: boolean;
    imageClassName?: string;
    gradientClass: string;
}