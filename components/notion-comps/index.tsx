import { lazy } from 'react'
import { NotionRenderer, BlockMapType, BlockValueProp, CustomBlockComponentProps, BlockValueType } from "react-notion";
import NotionImage from './Image'
// import NotionCode from './Code'

const NotionCode = lazy(() => import('./Code'))

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
                code: ({ blockValue }: CustomBlockComponentProps<'code'>) => {
                    return (
                        <NotionCode blockValue={blockValue as BlockValueProp<typeof blockValue>}/>
                    )
                }
                
            }}
        />
    )
}

export default NotionContentRender