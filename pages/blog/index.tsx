import React from 'react'
import { CustomHead } from '../../components/utils/CustomHead'
import BlogPostCard from '../../components/cards/BlogPostCard'
import { GetStaticProps } from 'next'
import { getDatabase } from '../../lib/helper-functions'
import { ScrollToTopBtn } from '../../components/utils/_buttons'

const BlogPage = ({
    posts, recentPosts
}: any) => {

    return (
        <React.Fragment>
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
                            <BlogPostCard key={recentPosts[0].id} post={recentPosts[0]?.properties} active={true} imagePriority={true} />
                    </section>
                }
                <section
                    className="pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {recentPosts.slice(1, 4).map((post: any) => {
                        return <BlogPostCard key={post.id} post={post?.properties} active={true} imagePriority={true} />
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
                        return <BlogPostCard key={post.id} post={post?.properties} active={false} imagePriority={false} /> 
                    })}
                </section>
            </>
            <ScrollToTopBtn/>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await getDatabase(process.env.NOTION_BLOG_DATABASE_ID)
    const recentPosts = response.reverse()

    return {
        props: {
            posts: response,
            recentPosts: recentPosts
        },
        revalidate: 600
    }
}

export default BlogPage