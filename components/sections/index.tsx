import Image from 'next/image'

interface HeroSectionI {
    heading: string;
    taglineBody: string;
    image: string;
    imageAlt: string;
    cta?: string;
    ctaButtonColor?: string;
}

export const HeroSection = ({
    heading,
    taglineBody,
    image,
    imageAlt,
    cta,
    ctaButtonColor
}: HeroSectionI) => {

    return(
        <section
            className="lg:pt-4 flex flex-col md:grid md:grid-cols-2 gap-12 justify-items-center item-stretch"
        >
            <section className="self-center justify-self-start">
                <h1 className="text-5xl font-reross leading-relaxed">{heading}</h1>
                <div className="leading-10 text-lg xl:text-xl xl:leading-loose">{ taglineBody }</div>
            </section>
            <section className="self-center justify-self-start lg:justify-self-end lg:mx-20">
                <div className="profile-callout">
                    <Image 
                        src={image}
                        width={500}
                        height={500}
                        priority
                        // className="w-72"
                        // className="desktop-profile transform translate-x-0 hidden md:inline"
                        alt={imageAlt}
                    />
                </div>
            </section>
        </section>
    )
}