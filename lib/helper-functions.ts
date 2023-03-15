const { Client } = require("@notionhq/client")
import { format } from 'date-fns'

export const copyToClipboard = (text: string) => {
    if (navigator) {
        navigator.clipboard.writeText(text)
    }
}

export const dateFormatter = (date: string) => {
    return format(new Date(date), "MMM do yyyy")
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getDatabase = async (databaseId: string | undefined) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
        {
            property: 'PublishedDate',
            direction: 'ascending',
        },
    ],
    filter: {
        property: 'Status',
        select: {
            equals: 'Published'
        }
    }
    });
    return response.results;
};

export const getPage = async (pageId: string | undefined) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};

export const getBlocks = async (blockId: string | undefined) => {
    const blocks = [];
    let cursor;
    while (true) {
        const { results, next_cursor }: any = await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
        });
        blocks.push(...results);
        if (!next_cursor) {
        break;
        }
        cursor = next_cursor;
    }
    return blocks;
};

export const updateBlogClaps = async (pageId: string | undefined, clapsNum: number) => {
    //  attempt: number
    // if (attempt > 0) {
        
    // }
    let newNum = clapsNum += 1
    const response = await notion.pages.update({
        page_id: pageId,
        properties: {
            Claps: {
                number: newNum
            }
        }
    })
    console.log(response)

    const options = {
        method: 'PATCH',
        body: JSON.stringify({
            "properties": {
                "Claps": {
                    "number": newNum
                }
            }
        })
    };
    
    fetch(`https://api.notion.com/v1/pages/${pageId}`, options)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
}