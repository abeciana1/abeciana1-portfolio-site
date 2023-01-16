import Image from 'next/image'

interface NotionImageI {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const NotionImage = ({
    src,
    width,
    height,
    alt
}: NotionImageI) => {

    return (
        <Image
            width={width}
            height={height}
            src={src}
            alt={alt}
        />
    )
}

export default NotionImage