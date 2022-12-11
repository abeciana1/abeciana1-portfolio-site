import React from 'react'
import { PageMargin } from '../../components/layouts'
import { BlogPostHead } from '../../components/utils/CustomHead'
import { NotionRenderer, BlockMapType } from "react-notion";
import Image from 'next/image'
import "prismjs/themes/prism-tomorrow.css";
import { GetStaticProps, GetStaticPaths } from 'next'

interface PostI {
    id: string;
    Excerpt: string;
    Name: string; // blog title
    PublishedDate: string;
    Slug: string;
    hostedImage: string;
    Tags: any;
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

    return (
        <React.Fragment>
            <BlogPostHead
                title={"Blog | " + Name}
                description={Excerpt}
                article={{
                    publishedTime: PublishedDate,
                    blogTags: Tags
                }}
            />
            <PageMargin>
                <section
                    className="py-10 leading-8"
                >
                    <section>
                        <h1
                            className="text-4xl lg:text-5xl py-5"
                        >{Name}</h1>
                        <p
                            className="py-2 italic"
                        >
                            {Excerpt}
                        </p>
                        <div>
                            <Image
                                height={500}
                                width={1000}
                                src={hostedImage}
                                alt={"Alex Beciana | Blog | " + Name}
                            />
                        </div>
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

export const getStaticPaths: GetStaticPaths = async () => {

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

export const getStaticProps: GetStaticProps = async (context: any) => {

    const posts = await fetch(
        `https://notion-api.splitbee.io/v1/table/${process.env.NOTION_DATABASE_ID}`
    ).then((res) => res.json());

    const post = posts.find((t: any) => t.Slug === context.params.slug);
    const blocks: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

    return {
        props: {
            post,
            blocks
        }
    }
}

export default BlogArticle