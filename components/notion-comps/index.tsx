import { NotionRenderer, BlockMapType } from "react-notion";

interface BlockI {
    blocks: BlockMapType;
}

const NotionContentRender = ({ blocks }: BlockI) => {
    return (
        <NotionRenderer
            blockMap={blocks}
        />
    )
}

export default NotionContentRender