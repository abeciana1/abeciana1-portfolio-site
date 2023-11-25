import { BlogPostHead } from '@/components/utils/CustomHead'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'
import SideBarSharing from '@/components/utils/SideBarSharing'
import { ShareBtn, ScrollToTopBtn } from '@/components/utils/_buttons'
import { AiFillCopy, AiFillMessage, AiFillMail } from "react-icons/ai";
import useResponsiveness from '@/lib/useResponsiveness'
import { copyToClipboard } from '@/lib/helper-functions'
import { gql, GraphQLClient } from 'graphql-request'
import { IPost, ITagData, IParams, IPaths } from '@/interfaces'
import Markdown from 'react-markdown'
import Highlight from 'react-highlight'


const BlogArticle = ({ post }: {post: IPost}) => {
    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    const desktop = isDesktop
    const mobile = (isMobile || isTablet)

    return (
        <>
            <BlogPostHead
                title={`Blog | ${post.title}`}
                description={post.excerpt}
                article={{
                    publishedTime: post.publishedDate,
                    blogTags: post.blogPostTags.map((tag: ITagData) => tag.tagName)
                }}
                image={post.featuredImage.url}
            />
            {claps}
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
                        className="py-4 break-words leading-loose text-xl"
                    >
                        <Markdown
                            children={post.content}
                            components={{
                                code(props: any) {
                                    const {children, className, node, ...rest} = props
                                    const match = node?.properties.className?.[0].split('-')[1]
                                    return (
                                        <>
                                        {match ?
                                            <Highlight className={"my-5 notion-code " + className} >
                                                {children?.[0]}
                                            </Highlight>
                                            :
                                            <code className="notion-inline-code">{children?.[0]}</code>
                                        }
                                        </>
                                    )
                                }
                            }}
                        />
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
        </>
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
    
    const postData: IPaths = await postClient.request(postQuery)
    
    let paths = postData.blogPosts.map((post: IParams) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {slug} = context.params as IParams

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
    const postData: {blogPosts: IPost[]} = await postClient.request(blogPostQuery)

    return {
        props: {
            post: postData.blogPosts[0],
        },
        revalidate: 60 * 10 * 60
    }
}

export default BlogArticle