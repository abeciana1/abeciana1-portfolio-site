
interface HeroSectionI {
    heading: string;
    taglineBody: string;
    image: string;
    cta?: string;
    ctaButtonColor?: string;
}

export const HeroSection = ({
    heading,
    taglineBody,
    image,
    cta,
    ctaButtonColor
}: HeroSectionI) => {

    return(
        <section>
            <section></section>
        </section>
    )
}