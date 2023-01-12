import Image, { StaticImageData } from 'next/image'
import cx from 'classnames'
import { PreRenderLinkAsBtn } from '../utils/PreRenderLink'
import useResponsiveness from '../../lib/useResponsiveness'
import profilePic from '../../public/profile-pic.webp'

interface HeroSectionI {
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

export const HeroSectionWithLink = ({
    heading,
    taglineBody,
    image,
    imageAlt,
    cta = "",
    ctaHref = "",
    ctaButtonColor = "",
    ctaAlt = "",
    reverseOrder,
    imageClassName
}: HeroSectionI) => {

    return(
        <section
            className={cx("lg:pt-8 flex flex-col lg:grid lg:grid-cols-2 gap-20 justify-items-center item-stretch", {
                ["flex-col-reverse"]: reverseOrder
            })}
        >
            <section className="self-center justify-self-start">
                <h1 className="text-5xl font-reross leading-relaxed">{heading}</h1>
                <div className="leading-10 text-lg xl:text-xl xl:leading-loose">{taglineBody}</div>
                {cta && (
                    <div>
                        <PreRenderLinkAsBtn
                            href={ctaHref}
                            linkText={cta}
                            alt={ctaAlt}
                            ctaButtonColor={ctaButtonColor}
                        />
                    </div>
                )}
            </section>
            <section className="self-center justify-self-start lg:justify-self-end">
                <Image 
                    src={image}
                    width={400}
                    height={414}
                    priority
                    className={imageClassName}
                    alt={imageAlt}
                />
            </section>
        </section>
    )
}

interface HeroGradientI {
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

export const HeroSectionWithLinkGradientBG = ({
    heading,
    taglineBody,
    image,
    imageAlt,
    cta = "",
    ctaHref = "",
    ctaButtonColor = "",
    ctaAlt = "",
    reverseOrder,
    imageClassName,
    gradientClass
}: HeroGradientI) => {

    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    const desktop = (isDesktop || isTablet)
    const mobile = (isMobile || isTablet)

    return (
        <>
            <section className="flex justify-center">
                <div className={cx("z-0 absolute object-cover lg:top-20 text-center blur-3xl opacity-30 h-[50rem] lg:h-[40rem] w-screen max-w-5xl rounded-3xl", {
                    [gradientClass]: gradientClass
                })}>
                </div>
            </section>
            {mobile &&
                <section className="justify-item-center self-center mx-auto z-50 block md:hidden drop-shadow-xl">
                    <Image 
                        src={profilePic}
                        width={500}
                        height={500}
                        priority
                        className="profile-pic-simple"
                        alt="Alex Beciana"
                    />
                </section>
            }
            <section
                className={cx("lg:pt-8 flex flex-col lg:grid lg:grid-cols-2 gap-20 justify-items-center item-stretch", {
                    ["flex-col-reverse"]: reverseOrder
                })}
            >
                <section className="z-10 self-center justify-self-start">
                    <h1 className="text-5xl font-reross leading-relaxed">{heading}</h1>
                    <div className="leading-10 text-lg xl:text-xl xl:leading-loose">{taglineBody}</div>
                    {cta &&
                        <PreRenderLinkAsBtn
                            href={ctaHref}
                            linkText={cta}
                            alt={ctaAlt}
                            ctaButtonColor={ctaButtonColor}
                        />
                    }
                </section>
                    {desktop &&
                        <section className="z-50 self-center justify-self-start lg:justify-self-end">
                            <Image 
                                src={image}
                                width={400}
                                height={414}
                                priority
                                className={imageClassName}
                                alt={imageAlt}
                            />
                        </section>
                    }
            </section>
        </>
    )
}