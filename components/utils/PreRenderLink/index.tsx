import Link from 'next/link'
import cx from 'classnames'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

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
    showArrow?: boolean;
}

export const PreRenderLinkAsBtn = ({
    href,
    linkText,
    alt,
    ctaButtonColor,
    showArrow
}: LinkBtnI) => {
    return (
        <div className="z-50 relative">
            <Link
                href={href}
                className={cx("text-xl xl:text-2xl leading-10 xl:leading-loose px-3 py-1 rounded-md font-medium flex items-center w-fit",{
                    ["bg-altYellow text-black"]: ctaButtonColor === "altYellow",
                    ["bg-black text-white"]: ctaButtonColor === "black",
                    ["bg-altRed text-white"]: ctaButtonColor === "altRed",
                    ["bg-altGray text-black"]: ctaButtonColor === "altGray",
                    ["bg-altBlue text-white"]: ctaButtonColor === "altBlue",
                    ["bg-blue-800 text-white"]: ctaButtonColor === "blue-800"
                })}
            >
                {linkText}
                {showArrow &&
                    <ArrowRightIcon className="ml-2 h-6 w-6" strokeWidth="2" />
                }
                <span className="sr-only">{alt}</span>
            </Link>
        </div>
    )
}