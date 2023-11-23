import { CustomHead } from '@/components/utils/CustomHead'
import BlogPostCard from '@/components/cards/BlogPostCard'
import { GetStaticProps } from 'next'
import { ScrollToTopBtn } from '@/components/utils/_buttons'
import { gql, GraphQLClient } from 'graphql-request'

const BlogPage = ({
    posts, recentPosts
}: any) => {

    return (
        <>
            <CustomHead
                title="Blog"
                description="Alex Beciana | Writing and sharing software engineering concepts in easy-to-understand articles and tutorials."
            />
            <>
                <h2
                    id="recent"
                    className="text-4xl leading-relaxed mt-5"
                >Recent posts</h2>
                { recentPosts &&
                    <section
                        className="py-12 md:mx-16 lg:mx-44"
                    >
                            <BlogPostCard key={recentPosts[0].id} post={recentPosts[0]} active={true} imagePriority={true} />
                    </section>
                }
                <section
                    className="pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {recentPosts.slice(1, 4).map((post: any) => {
                        return <BlogPostCard key={post.id} post={post} active={true} imagePriority={true} />
                    })}
                </section>
            </>
            <>
                <h2
                    id="all"
                    className="text-4xl leading-relaxed"
                >All posts</h2>
                <section
                    className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {posts.map((post: any) => {
                        return <BlogPostCard key={post.id} post={post} active={false} imagePriority={false} /> 
                    })}
                </section>
            </>
            <ScrollToTopBtn/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    
    const allPosts = gql`
        query post {
        blogPosts(orderBy: publishedDate_ASC) {
            id
            title
            publishedDate
            slug
            excerpt
            blogPostTags {
            id
            color
            tagName
            }
            featuredImage {
            url(transformation: {document: {output: {format: webp}}})
            }
        }
        }
    `

    const recentPosts = gql`query post {
            blogPosts(orderBy: publishedDate_DESC, first: 4) {
            id
            title
            publishedDate
            slug
            excerpt
            blogPostTags {
                id
                color
                tagName
            }
            featuredImage {
                url(transformation: {document: {output: {format: webp}}})
            }
            }
        }`

    const postClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")
    const allPostsData: any = await postClient.request(allPosts)
    const recentPostsData: any = await postClient.request(recentPosts)

    return {
        props: {
            posts: allPostsData.blogPosts,
            recentPosts: recentPostsData.blogPosts
        },
        revalidate: 600
    }
}

export default BlogPage