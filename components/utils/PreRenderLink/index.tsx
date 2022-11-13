import Link from 'next/link'
import cx from 'classnames'

interface LinkI {
    href: string;
    className: string;
    linkText: string;
    alt: string;
}

export const PreRenderLink = ({
    href,
    className,
    linkText,
    alt
}: LinkI) => {
    return (
        <Link href={href} className={className}>
            {linkText}
            <span className="sr-only">{alt}</span>
        </Link>
    )
}

interface LinkBtnI {
    href: string;
    className?: string;
    linkText: string;
    alt: string;
    ctaButtonColor: string;
}

// focus:ring-altBlue focus:ring-4
export const PreRenderLinkAsBtn = ({
    href,
    linkText,
    alt,
    ctaButtonColor
}: LinkBtnI) => {
    return (
        <Link
            href={href}
            className={cx("px-4 py-2 rounded-md",{
                ["text-xl xl:text-2xl leading-10 xl:leading-loose bg-altYellow text-black"]: ctaButtonColor === "altYellow",
                ["text-xl xl:text-2xl leading-10 xl:leading-loose bg-black text-white"]: ctaButtonColor === "black",
                ["text-xl xl:text-2xl leading-10 xl:leading-loose bg-altRed text-white"]: ctaButtonColor === "altRed",
                ["text-xl xl:text-2xl leading-10 xl:leading-loose bg-altGray text-black"]: ctaButtonColor === "altGray",
                ["text-xl xl:text-2xl leading-10 xl:leading-loose bg-altBlue text-white"]: ctaButtonColor === "altBlue",
                ["text-xl xl:text-2xl leading-10 xl:leading-loose bg-blue-800 text-white"]: ctaButtonColor === "blue-800"
            })}
        >
            { linkText }
            <span className="sr-only">{alt}</span>
        </Link>
    )
}