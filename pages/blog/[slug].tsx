import React from 'react'
import { BlogPostHead } from '../../components/utils/CustomHead'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'
import SideBarSharing from '../../components/utils/SideBarSharing'
import { ShareBtn, ScrollToTopBtn } from '../../components/utils/_buttons'
import { AiFillCopy, AiFillMessage, AiFillMail } from "react-icons/ai";
import useResponsiveness from '../../lib/useResponsiveness'
import { copyToClipboard } from '../../lib/helper-functions'
import { gql, GraphQLClient } from 'graphql-request'
import { TagDataI } from '../../components/cards/TagCard'

interface PostImageI {
    alt: string;
    url: string
}

interface PostTagI {
    color: string;
    tagName: string;
    id: string;
}

interface PostI {
    id: string;
    excerpt: string;
    title: string;
    publishedDate: string;
    slug: string;
    content: string;
    featuredImage: PostImageI;
    blogPostTags: PostTagI[];
}

const BlogArticle = ({ post }: {post: PostI}) => {
    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    const desktop = isDesktop
    const mobile = (isMobile || isTablet)

    return (
        <React.Fragment>
            <BlogPostHead
                title={`Blog | ${post.title}`}
                description={post.excerpt}
                article={{
                    publishedTime: post.publishedDate,
                    blogTags: post.blogPostTags.map((tag: TagDataI) => tag.tagName)
                }}
                image={post.featuredImage.url}
            />
                {desktop &&
                    <section className="fixed">
                        <SideBarSharing>
                            <ShareBtn
                                body=""
                                subject={`Check out this blog post I read, ${post.title}`}
                                text="Share by email"
                                textColor="white"
                                backgroundColor="black"
                                icon={AiFillMail}
                                addClass="hover:w-44 hover:border-white hover:border-2"
                            />
                            <ShareBtn
                                body=""
                                text="Copy link"
                                textColor="white"
                                backgroundColor="black"
                                icon={AiFillCopy}
                                onClick={() => copyToClipboard(`https://alexbeciana.com/blog/${post.slug}`)}
                                addClass="hover:w-32 hover:border-white hover:border-2"
                            />
                        </SideBarSharing>
                    </section>
                }
                <section
                    className="leading-8 mt-5"
                    >
                    <section>
                        <h1
                            className="text-4xl lg:text-5xl py-5"
                        >{post.title}</h1>
                        <p
                            className="py-2 italic"
                        >
                            {post.excerpt}
                        </p>
                        <div>
                            <Image
                                height={500}
                                width={1000}
                                priority
                                src={post.featuredImage.url}
                                alt={`Alex Beciana | Blog | ${post.title}`}
                            />
                        </div>
                    </section>
                    {mobile && 
                        <SideBarSharing>
                            <ShareBtn
                                body=""
                                subject={`Check out this blog post I read, ${post.title}`}
                                text="Share by email"
                                textColor="white"
                                backgroundColor="black"
                                icon={AiFillMail}
                                addClass="hover:w-44"
                            />
                            <ShareBtn
                                body={`Check out this blog post I read, ${post.title} : https://alexbeciana.com/blog/${post.slug}`}
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
                                onClick={() => copyToClipboard(`https://alexbeciana.com/blog/${post.slug}`)}
                                addClass="hover:w-32"
                            />
                        </SideBarSharing>
                    }
                    <section
                        className="py-4 break-words"
                    >
                        {/* <NotionContentRender blocks={blocks} /> */}
                    </section>
                </section>
                <ScrollToTopBtn />
                {/* <section
                    className="py-12"
                >
                    <h2 className="text-4xl font-reross text-altYellow leading-relaxed">
                     Related posts
                    </h2>
                </section> */}
        </React.Fragment>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const postClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")

    const postQuery = gql`
    query posts {
        blogPosts {
            slug
        }
    }`
    
    const postData = await postClient.request(postQuery)
    
    let paths = postData.blogPosts.map((post: any) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const slug = params.slug as string;

    const blogPostQuery = gql`query post {
        blogPosts(where: {slug: "${slug}"}) {
        id
        title
        featuredImage {
            alt
            url(transformation: {document: {output: {format: webp}}})
        }
        blogPostTags {
            color
            tagName
            id
        }
        slug
        publishedDate
        excerpt
        content
        }
    }`

    const postClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")
    const postData = await postClient.request(blogPostQuery)

    return {
        props: {
            post: postData.blogPosts[0],
        },
        revalidate: 600
    }
}

export default BlogArticle