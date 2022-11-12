import Link from 'next/link'

interface LinkI {
    href: string;
    className: string;
    linkText: string;
    alt: string;
}

const PreRenderLink = ({
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

export default PreRenderLink