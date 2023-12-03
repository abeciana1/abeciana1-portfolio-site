import { useState, useMemo } from 'react'
import { CustomHead } from '@/components/utils/CustomHead'
import BlogPostCard from '@/components/cards/BlogPostCard'
import { GetStaticProps } from 'next'
import { ScrollToTopBtn } from '@/components/utils/_buttons'
import { gql, GraphQLClient } from 'graphql-request'
import { IPostData, IBlogTag } from '@/interfaces'
import { IoFilter, IoClose } from "react-icons/io5";
import { FilterTagButton } from '@/components/utils/_buttons'
import cx from 'classnames'

const BlogPage = ({
    posts, recentPosts, blogTags
}: {
    posts: IPostData[],
    recentPosts: IPostData[],
    blogTags: IBlogTag[]
}) => {
    const [ filter, setFilter ] = useState({
        searchTerm: '',
        techToolTags: [] as string[]
    })
    
    const searchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (document) {
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.code === 'Enter') {
                    e.preventDefault()
                }
            })
            setFilter({
                ...filter,
                searchTerm: e.target.value
            })
        }
    }

    const filteredPosts = useMemo(() => {
        const searchFilteredPosts = posts.filter((post: IPostData) => {
            const includesSearchTerm = post.title.toLowerCase().includes(filter.searchTerm.toLowerCase())
            const includesTechTags = filter.techToolTags.every((tagString: any) => {
                return post.blogPostTags.map((tag: any) => tag.tagName).includes(tagString)
            })
            return includesSearchTerm && includesTechTags
        })
        return searchFilteredPosts
    }, [filter.searchTerm, filter.techToolTags])

    const clearAllFilter = () => {
        setFilter({
            searchTerm: "",
            techToolTags: []
        })
    }

    const addTagFilter = (tag: string) => {
        setFilter({
            ...filter,
            techToolTags: [...filter.techToolTags, tag]
        })
    }

    const removeTagFilter = (tag: string) => {
        let tagIndex = filter.techToolTags.indexOf(tag)
        let copiedList = [...filter.techToolTags]
        copiedList.splice(tagIndex, 1)
        setFilter({
            ...filter,
            techToolTags: copiedList
        })
    }

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
                    {recentPosts.slice(1, 4).map((post: IPostData) => {
                        return <BlogPostCard key={post.id} post={post} active={true} imagePriority={true} />
                    })}
                </section>
            </>
            <>
                <h2
                    id="all"
                    className="text-4xl leading-relaxed"
                >All posts</h2>
                <section>
                    <form className='w-full'>
                        <div className='flex gap-5 lg:w-3/5'>
                            <label className='sr-only'>Search blog posts</label>
                            <input
                                name="searchTerm"
                                type="text"
                                placeholder="Search blog posts"
                                value={filter.searchTerm}
                                className="w-full py-2 px-4 rounded-3xl focus:ring-2 border-2 border-black focus:border-0 mt-1"
                                onChange={searchTermHandler}
                            />
                        </div>
                    </form>
                    <section className="pt-5 flex gap-5 items-center">
                        {/* <button 
                            onClick={clearAllFilter}
                            aria-label='Clear all filters'
                            className='flex items-center bg-gray-200 text-black py-0.5 px-1.5 rounded-lg whitespace-nowrap min-h-[2rem]'
                        >
                            <span><IoClose size={20} title='Clear filters icon' /></span>Clear all
                        </button> */}
                        <div className='overflow-x-auto flex gap-2.5 whitespace-nowrap min-h-[3rem]'>
                            {filter.techToolTags.length > 0 &&
                                filter.techToolTags.map((tag: string) => (
                                    <button
                                        onClick={() => removeTagFilter(tag)}
                                        key={tag}
                                        className='cursor-pointer text-lg bg-gray-200 w-full py-0.5 px-2 rounded-md max-h-[2rem]'
                                    >{tag}</button>
                                ))
                            }
                        </div>
                    </section>
                    <section className='flex flex-wrap gap-2.5'>
                        {blogTags.map(({tagName}: IBlogTag, index) => {
                            return (
                                    <FilterTagButton
                                        key={tagName + '-' + index}
                                        tagName={tagName}
                                        active={filter.techToolTags.includes(tagName)}
                                        addTagFilter={addTagFilter}
                                        removeTagFilter={removeTagFilter}
                                    />
                            )
                        })}
                    </section>
                </section>
                <section
                    className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {filteredPosts.map((post: IPostData) => {
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

        const allTags = gql`
            query tags {
                blogPostTags {
                    tagName
                }
            }
        `

    const postClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")
    const allPostsData: {blogPosts: IPostData[]} = await postClient.request(allPosts)
    const recentPostsData: {blogPosts: IPostData[]} = await postClient.request(recentPosts)
    const blogTags: {blogPostTags: IBlogTag[]} = await postClient.request(allTags)

    return {
        props: {
            posts: allPostsData.blogPosts,
            recentPosts: recentPostsData.blogPosts,
            blogTags: blogTags.blogPostTags
        },
        revalidate: 600
    }
}

export default BlogPage