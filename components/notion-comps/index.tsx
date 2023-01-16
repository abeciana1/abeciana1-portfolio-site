import { useMemo } from 'react'
import { NotionRenderer, BlockMapType } from "react-notion";
import NotionImage from './Image'
import Link from 'next/link'
import Image from 'next/image'

interface BlockI {
    blocks: BlockMapType;
}

const NotionContentRender = ({ blocks }: BlockI) => {
    return (
        <NotionRenderer
            blockMap={blocks}
            customBlockComponents={{
                image: ({ blockValue }: any) => {
                    return (
                        <NotionImage blockValue={blockValue}/>
                        )
                    }
                // text: ({ blockValue, renderComponent }: any) => {
                //     console.log(blockValue)
                //     return (
                //         <p>{renderComponent()}</p>
                //     )
                // }
            }}
        />
    )
}

export default NotionContentRender