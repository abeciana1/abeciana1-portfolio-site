import moment from 'moment'
const { Client } = require("@notionhq/client")

export const copyToClipboard = (text: string) => {
    if (navigator) {
        navigator.clipboard.writeText(text)
    }
}

export const dateFormatter = (date: string) => {
    return moment(date).format("MMM Do YYYY")
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