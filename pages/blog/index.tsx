import React from 'react'
import { CustomHead } from '../../components/utils/CustomHead'
import { PageMargin } from '../../components/layouts'
import BlogPostCard from '../../components/cards/BlogPostCard'
import { GetStaticProps } from 'next'
import { getDatabase } from '../../lib/helper-functions'

const BlogPage = ({
    posts
}: any) => {
    let descPosts = posts.reverse()

    return (
        <React.Fragment>
            <CustomHead
                title="Blog"
                description="Alex Beciana | Writing and sharing software engineering concepts in easy-to-understand articles and tutorials."
            />
            <PageMargin>
                <>
                    <h2
                        id="recent"
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >recent posts</h2>
                    { descPosts &&
                        <section
                            className="py-12 md:mx-16 lg:mx-44"
                        >
                                <BlogPostCard key={descPosts[0].id} post={descPosts[0]?.properties} active={true} />
                        </section>
                    }
                    <section
                        className="pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {descPosts.slice(1, 4).map((post: any) => {
                            return <BlogPostCard key={post.id} post={post?.properties} active={true} />
                        })}
                    </section>
                </>
                <>
                    <h2
                        id="all"
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >all posts</h2>
                    <section
                        className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {posts.map((post: any) => {
                            return <BlogPostCard key={post.id} post={post?.properties} active={false} /> 
                        })}
                    </section>
                </>
            </PageMargin>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await getDatabase(process.env.NOTION_DATABASE_ID)

    return {
        props: {
            posts: response
        }
    }
}

export default BlogPage