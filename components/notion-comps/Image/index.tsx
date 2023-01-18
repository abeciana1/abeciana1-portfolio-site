import { useMemo } from 'react'
import Image from 'next/image'

interface NotionImageI {
    blockValue: any;
}

const NotionImage = ({
    blockValue,
}: NotionImageI) => {
    const source = blockValue.format.display_source
    const caption = blockValue.properties.caption?.[0][0];
    const aspectRatio = blockValue.format.block_aspect_ratio
    const imgWidth = blockValue.format.block_width

    const imgHeight = useMemo(() => {
        let height = Math.floor(aspectRatio * imgWidth)
        return height
    }, [imgWidth])

    const imgSource = useMemo(() => {
        const url = new URL(
            `https://www.notion.so${
            source.startsWith("/image") ? source : `/image/${encodeURIComponent(source)}`
            }`
        );

        if (blockValue && !source.includes("/images/page-cover/")) {
            const table =
            blockValue.parent_table === "space" ? "block" : blockValue.parent_table;
            url.searchParams.set("table", table);
            url.searchParams.set("id", blockValue.id);
            url.searchParams.set("cache", "v2");
        }

        return url.toString();
    }, [source])

    return (
        <>
            <Image
                src={imgSource}
                alt={caption}
                width={imgWidth}
                height={imgHeight}
            />
        </>
    )
}

export default NotionImage