import { lazy } from 'react'
import { NotionRenderer, BlockMapType, BlockValueProp, CustomBlockComponentProps, BlockValueType } from "react-notion";
import NotionImage from './Image'
import {
    NotionHeader,
    NotionSubHeader,
    NotionSubSubHeader
} from './Headers'

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
                        <NotionCode key={blockValue.id} blockValue={blockValue as BlockValueProp<typeof blockValue>}/>
                    )
                },
                header: ({ blockValue }: CustomBlockComponentProps<'header'>) => {
                    return (
                        <NotionHeader key={blockValue.id} blockValue={blockValue as BlockValueProp<typeof blockValue>} />
                    )
                },
                sub_header: ({ blockValue }: CustomBlockComponentProps<'sub_header'>) => {
                    return (
                        <NotionSubHeader key={blockValue.id} blockValue={blockValue as BlockValueProp<typeof blockValue>}/>
                    )
                },
                sub_sub_header: ({ blockValue }: CustomBlockComponentProps<'sub_sub_header'>) => {
                    return (
                        <NotionSubSubHeader key={blockValue.id} blockValue={blockValue as BlockValueProp<typeof blockValue>}/>
                    )
                }
            }}
        />
    )
}

export default NotionContentRender