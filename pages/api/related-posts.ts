// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    fetch(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE_ID}`)
        .then((res) => res.json())
        .then(data => {
        console.log(data)
    })
}
