import React from 'react'
import { PageMargin } from '../../components/layouts'
import CustomHead from '../../components/utils/CustomHead'

interface TagI {
    [index: number]: string;
}

interface PostI {
    id: string;
    Excerpt: string;
    Name: string; // blog title
    PublishedDate: string;
    Slug: string;
    hostedImage: string;
    Tags: TagI[];
}

interface BlogArticleI {
    post: PostI;
    blocks: any;
}

const BlogArticle = ({ post, blocks }: BlogArticleI) => {

    return (
        <React.Fragment>
            <CustomHead
                title={"Blog | "}
                description=""
            />
            <PageMargin>

            </PageMargin>
        </React.Fragment>
    )
}

export const getStaticPaths = async () => {

    const posts = await fetch(
        `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE_ID}`
    ).then((res) => res.json());

    let paths = posts.map((post: any) => {
        return {
            params: {
                slug: post.Slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {

    const posts = await fetch(
        `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE_ID}`
    ).then((res) => res.json());

    const post = posts.find((t: any) => t.Slug === context.params.slug);

    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

    return {
        props: {
            post,
            blocks
        }
    }
}

export default BlogArticle