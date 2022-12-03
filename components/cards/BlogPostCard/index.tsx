import React, { useState } from 'react';
import Link from 'next/link'
import moment from 'moment';
import cx from 'classnames'
import Image from 'next/image'

interface TagI {
    color: string;
    name: string;
}

interface BlogPostCardI {
    post: any;
    active: boolean;
}

const BlogPostCard = ({ post, active }: BlogPostCardI) => {

    const slug = post["Slug"]["rich_text"][0]["plain_text"]
    const title = post["Name"]["title"][0]["plain_text"]
    const publishedDate = post["PublishedDate"]["date"]["start"]
    const tags = post["Tags"]["multi_select"]
    const excerpt = post["Excerpt"]["rich_text"][0]["plain_text"]

    const [mouseHover, setHover] = useState(false)

    return (
        <React.Fragment>
            <Link
                className="z-40"
                href={`/blog/${slug}`}
            >
                <div>
                    <Image
                        src={post["hostedImage"]["rich_text"][0]["plain_text"]}
                        width={1000}
                        height={500}
                        alt={"Alex Beciana - " + title}
                    />
                </div>
                {active &&
                    <div className="w-full bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl">
                        <div
                            className="font-medium text-lg px-2 flex flex-wrap"
                        >
                            {title + " — " + moment(new Date(publishedDate)).add(1, 'days').format("MMM Do YY")}
                        </div>
                        <div
                            className="flex flex-wrap px-1"
                        >
                            {tags.map(({ color, name }: TagI) => {
                                return (<span
                                    className={cx("ml-1 my-1 py-0.5 px-1.5 rounded-full text-xs leading-tight", {
                                        ['text-white bg-yellow-700 bg-opacity-60']: color === "brown",
                                        ['text-white bg-orange-400	 bg-opacity-60']: color === 'orange',
                                        ['text-white bg-pink-300']: color === 'pink',
                                        ['text-white bg-purple-300']: color === 'purple',
                                        ['text-black bg-yellow-200']: color === 'yellow',
                                        ['text-white bg-blue-300']: color === 'blue',
                                        ['text-black bg-gray-200']: color === 'gray',
                                        ['text-white bg-green-400']: color === 'green',
                                        ['text-white bg-red-400']: color === 'red',
                                        ['text-white bg-blue-800']: color === 'default'
                                    })}
                                >{name}</span>)
                            })}
                            <div
                                className="p-2"
                            >
                                {excerpt}
                            </div>
                        </div>
                    </div>
                }
            </Link>
        </React.Fragment>
    )
}

export default BlogPostCard