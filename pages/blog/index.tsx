import React from 'react'
import CustomHead from '../../components/utils/CustomHead'
import { PageMargin } from '../../components/layouts'
const { Client } = require("@notionhq/client")

const BlogPage = () => {

    return (
        <React.Fragment>
            <CustomHead
                title="Blog"
                description="Alex Beciana | Writing and sharing software engineering concepts in easy-to-understand articles and tutorials."
            />
            <PageMargin>

            </PageMargin>
        </React.Fragment>
    )
}

export const getStaticProps = async () => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
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

    return {
        props: {
            posts: response.results,
        }
    }
}

export default BlogPage