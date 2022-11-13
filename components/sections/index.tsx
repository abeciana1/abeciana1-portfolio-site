import Image from 'next/image'
import cx from 'classnames'

// todo Create hero section with gradient blur
// todo add cta button element to hero section for render

interface HeroSectionI {
    heading: string;
    taglineBody: string;
    image: string;
    imageAlt: string;
    cta?: string;
    ctaButtonColor?: string;
    reverseOrder?: boolean;
    imageClassName?: string;
}

export const HeroSection = ({
    heading,
    taglineBody,
    image,
    imageAlt,
    cta,
    ctaButtonColor,
    reverseOrder,
    imageClassName
}: HeroSectionI) => {

    return(
        <section
            className={cx("lg:pt-4 flex flex-col md:grid md:grid-cols-2 gap-12 justify-items-center item-stretch", {
                ["flex-col-reverse"]: reverseOrder
            })}
        >
            <section className="self-center justify-self-start">
                <h1 className="text-5xl font-reross leading-relaxed">{heading}</h1>
                <div className="leading-10 text-lg xl:text-xl xl:leading-loose">{ taglineBody }</div>
            </section>
            <section className="self-center justify-self-start lg:justify-self-end lg:mx-20">
                <div className="">
                    <Image 
                        src={image}
                        width={450}
                        height={450}
                        priority
                        className={imageClassName}
                        alt={imageAlt}
                    />
                </div>
            </section>
        </section>
    )
}