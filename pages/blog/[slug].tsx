import React from 'react'
import { BlogPageMargin } from '../../components/layouts'
import { BlogPostHead } from '../../components/utils/CustomHead'
import Image from 'next/image'
import "prismjs/themes/prism-tomorrow.css";
import { GetStaticProps, GetStaticPaths } from 'next'
import SideBarSharing from '../../components/utils/SideBarSharing'
import { ShareBtn } from '../../components/utils/_buttons'
import { AiFillCopy, AiFillMessage, AiFillMail } from "react-icons/ai";
import useResponsiveness from '../../lib/useResponsiveness'
import { copyToClipboard, getBlocks, getDatabase } from '../../lib/helper-functions'
import {
    slugProp,
    titleProp,
    publishedDateProp,
    tagsProp,
    excerptProp,
    hostedImageProp
} from '../../lib/notion-props'

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
    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    const desktop = isDesktop
    const mobile = (isMobile || isTablet)

    const slug = slugProp(post)
    const title = titleProp(post)
    const publishedDate = publishedDateProp(post)
    const tags = tagsProp(post)
    const excerpt = excerptProp(post)
    const hostedImage = hostedImageProp(post)

    return (
        <React.Fragment>
            <BlogPostHead
                title={"Blog | " + title}
                description={excerpt}
                article={{
                    publishedTime: publishedDate,
                    blogTags: tags
                }}
            />
            {desktop && 
                <SideBarSharing>
                    <ShareBtn
                        body=""
                        subject={"Check out this blog post I read, " + title}
                        text="Share by email"
                        textColor="white"
                        backgroundColor="black"
                        icon={AiFillMail}
                        addClass="hover:w-44"
                    />
                    <ShareBtn
                        body={"Check out this blog post I read, " + title + ": https://alexbeciana.com/blog/" + slug}
                        text="Share by SMS"
                        textColor="white"
                        backgroundColor="black"
                        icon={AiFillMessage}
                        sms={true}
                        addClass="hover:w-40"
                    />
                    <ShareBtn
                        body=""
                        text="Copy link"
                        textColor="white"
                        backgroundColor="black"
                        icon={AiFillCopy}
                        onClick={() => copyToClipboard(`https://alexbeciana.com/blog/${slug}`)}
                        addClass="hover:w-32"
                    />
                </SideBarSharing>
            }
            <BlogPageMargin>
                <section
                    className="leading-8"
                >
                    <section>
                        <h1
                            className="text-4xl lg:text-5xl py-5"
                        >{title}</h1>
                        <p
                            className="py-2 italic"
                        >
                            {excerpt}
                        </p>
                        <div>
                            <Image
                                height={500}
                                width={1000}
                                src={hostedImage}
                                alt={"Alex Beciana | Blog | " + title}
                            />
                        </div>
                    </section>
                    {mobile && 
                        <SideBarSharing>
                            <ShareBtn
                                body=""
                                subject={"Check out this blog post I read, " + title}
                                text="Share by email"
                                textColor="white"
                                backgroundColor="black"
                                icon={AiFillMail}
                                addClass="hover:w-44"
                            />
                            <ShareBtn
                                body={"Check out this blog post I read, " + title + ": https://alexbeciana.com/blog/" + slug}
                                text="Share by SMS"
                                textColor="white"
                                backgroundColor="black"
                                icon={AiFillMessage}
                                sms={true}
                                addClass="hover:w-40"
                            />
                            <ShareBtn
                                body=""
                                text="Copy link"
                                textColor="white"
                                backgroundColor="black"
                                icon={AiFillCopy}
                                onClick={() => copyToClipboard(`https://alexbeciana.com/blog/${slug}`)}
                                addClass="hover:w-32"
                            />
                        </SideBarSharing>
                    }
                    <section
                        className="py-4 break-words"
                    >

                    </section>
                </section>
                <section
                    className="py-12"
                >
                    <h2 className="text-4xl font-reross text-altYellow leading-relaxed">Related posts</h2>

                </section>
            </BlogPageMargin>
        </React.Fragment>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getDatabase(process.env.NOTION_DATABASE_ID)

    let paths = posts.map((post: any) => {
        let slug = slugProp(post.properties)
        return {
            params: {
                slug: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {

    const posts = await getDatabase(process.env.NOTION_DATABASE_ID)

    const post = posts.find((t: any) => {
        let slug = slugProp(t.properties)
        if (slug === context.params.slug) {
            return t
        }
    });

    const blocks = await getBlocks(post.id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
        blocks
        .filter((block: any) => block.has_children)
        .map(async (block: any) => {
            return {
            id: block.id,
            children: await getBlocks(block.id),
            };
        })
    );
    const blocksWithChildren = blocks.map((block) => {
        // Add child blocks if the block should contain children but none exists
        if (block.has_children && !block[block.type].children) {
        block[block.type]["children"] = childBlocks.find(
            (x) => x.id === block.id
        )?.children;
        }
        return block;
    });

    return {
        props: {
            post: post.properties,
            blocks: blocksWithChildren,
        }
    }
}

export default BlogArticle