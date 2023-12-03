import { useEffect, useState, useMemo } from 'react'
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
    const [ isClient, setClient ] = useState(false)
    const [ showTagFilter, setTagFilter] = useState(false)
    const [ filter, setFilter ] = useState({
        searchTerm: '',
        techToolTags: [] as string[]
    })
    
    const searchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({
            ...filter,
            searchTerm: e.target.value
        })
    }

    useEffect(() => {
        setClient(true)
    }, [isClient])

    useEffect(() => {
        if (isClient) {
            let paramSearch = window.location.search
            const searchParams = new URLSearchParams(paramSearch)
            if (searchParams.has('searchTerm')) {
                setFilter({
                    ...filter,
                    searchTerm: searchParams.get('searchTerm') as string
                })
            }
        }
    }, [isClient])

    const filteredPosts = useMemo(() => {
        // * search term filtering
        const searchFilteredPosts = posts.filter((post: IPostData) => {
            return post.title.toLowerCase().includes(filter.searchTerm.toLowerCase())
        })


        return searchFilteredPosts
    }, [filter.searchTerm])

    const toggleTagFilter = () => {
        setTagFilter(!showTagFilter)
    }

    const clearAllFilter = () => {
        setFilter({
            searchTerm: "",
            techToolTags: []
        })
        setTagFilter(false)
    }

    const addTagFilter = (tag: string) => {
        setFilter({
            ...filter,
            techToolTags: [...filter.techToolTags, tag]
        })
    }

    console.log('filter.techToolTags', filter.techToolTags)

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
                                required
                                value={filter.searchTerm}
                                className="w-full py-2 px-4 rounded-3xl focus:ring-2 border-2 border-black focus:border-0 mt-1"
                                onChange={searchTermHandler}
                            />
                            <input
                                type="submit"
                                className="bg-altYellow text-black text-lg py-1 px-2 rounded-xl cursor-pointer w-32"
                            />
                        </div>
                    </form>
                    <section className="pt-5 flex gap-5 items-center">
                        <button onClick={toggleTagFilter} aria-hidden={!showTagFilter} aria-label='Toggle tag filter' 
                            className={cx('border-2 border-black rounded-full p-1', {
                                ['bg-black text-white']: showTagFilter
                            })}
                        >
                            <IoFilter title='Filter icon' strokeWidth={2} size={30} />
                        </button>
                        <button 
                            onClick={clearAllFilter}
                            aria-label='Clear all filters'
                            className='flex items-center bg-gray-200 text-black py-0.5 px-1.5 rounded-lg'
                        >
                            <span><IoClose size={20} title='Clear filters icon' /></span>Clear all
                        </button>
                    </section>
                        {showTagFilter &&
                            <section className='pt-5 flex flex-wrap gap-2.5'>
                                {blogTags.map(({tagName}: IBlogTag, index) => {
                                    return (
                                            <FilterTagButton
                                                key={tagName + '-' + index}
                                                tagName={tagName}
                                                active={filter.techToolTags.includes(tagName)}
                                                addTagFilter={addTagFilter}
                                            />
                                    )
                                })}
                            </section>
                        }
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