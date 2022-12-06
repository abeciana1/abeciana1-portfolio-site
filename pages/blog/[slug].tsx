import React from 'react'
import { PageMargin } from '../../components/layouts'
import CustomHead from '../../components/utils/CustomHead'
import { NotionRenderer } from "react-notion";
import Image from 'next/image'

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
    const {
        id,
        Excerpt,
        Name,
        PublishedDate,
        Slug,
        hostedImage,
        Tags
    } = post

    console.log({post});
    return (
        <React.Fragment>
            <CustomHead
                title={"Blog | " + Name}
                description={Excerpt}
            />
            <PageMargin>
                <section
                    className="py-10 leading-8"
                >
                    <section>
                        <h1
                            className="text-4xl lg:text-5xl py-5"
                        >{Name}</h1>
                        <div>
                            <Image
                                height={500}
                                width={1000}
                                src={hostedImage}
                                alt={"Alex Beciana | Blog | " + Name}
                            />
                        </div>
                        <p
                            className="py-2 italic"
                        >
                            {Excerpt}
                        </p>
                    </section>
                    <section
                        className="py-4 break-words"
                    >
                        <NotionRenderer
                            blockMap={blocks}
                        />
                    </section>
                </section>
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