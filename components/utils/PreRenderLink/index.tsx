import Link from 'next/link'

interface LinkI {
    href: string;
    className: string;
    linkText: string;
}

const PreRenderLink = ({
    href,
    className,
    linkText
}: LinkI) => {
    return (
        <Link href={href} className={className}>
            {linkText}
        </Link>
    )
}

export default PreRenderLink