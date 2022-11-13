import Link from 'next/link'
import cx from 'classnames'

// todo add svg arrow to render on hover on button link - make conditional

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

export const PreRenderLinkAsBtn = ({
    href,
    linkText,
    alt,
    ctaButtonColor
}: LinkBtnI) => {
    return (
        <Link
            href={href}
            className={cx("text-xl xl:text-2xl leading-10 xl:leading-loose px-4 py-2 rounded-md font-medium",{
                ["bg-altYellow text-black"]: ctaButtonColor === "altYellow",
                ["bg-black text-white"]: ctaButtonColor === "black",
                ["bg-altRed text-white"]: ctaButtonColor === "altRed",
                ["bg-altGray text-black"]: ctaButtonColor === "altGray",
                ["bg-altBlue text-white"]: ctaButtonColor === "altBlue",
                ["bg-blue-800 text-white"]: ctaButtonColor === "blue-800"
            })}
        >
            { linkText }
            <span className="sr-only">{alt}</span>
        </Link>
    )
}