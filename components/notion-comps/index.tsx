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
                // text: ({ blockValue, renderComponent }: any) => {
                //     console.log(blockValue)
                //     return (
                //         <p>{renderComponent()}</p>
                //     )
                // }
                image: ({ blockValue }: any) => {
                    return (
                        <NotionImage blockValue={blockValue}/>
                    )
                }
            }}
        />
    )
}

//* https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F79733fe4-a9e4-48f7-b7ee-61e2e555b2c0%2FScreen_Shot_2020-07-23_at_11.08.10_PM.png?table=block&id=e4a740f5-e5fa-4a3c-82d5-6efc9f629892&cache=v2
//* https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79733fe4-a9e4-48f7-b7ee-61e2e555b2c0/Screen_Shot_2020-07-23_at_11.08.10_PM.png

export default NotionContentRender