import { NotionRenderer, BlockMapType, BlockValueProp, CustomBlockComponentProps, BlockValueType } from "react-notion";
import NotionImage from './Image'

interface BlockI {
    blocks: BlockMapType;
}

const NotionContentRender = ({ blocks }: BlockI) => {
    return (
        <NotionRenderer
            blockMap={blocks}
            customBlockComponents={{
                image: ({ blockValue }: CustomBlockComponentProps<'image'>) => {
                    return (
                        <NotionImage blockValue={blockValue as BlockValueProp<typeof blockValue>}/>
                        )
                },
                // text: ({ blockValue }: BlockValueProp) => {
                //     return (
                //         <a>{blockValue.id}</a>
                //     )
                // }
            }}
        />
    )
}

export default NotionContentRender