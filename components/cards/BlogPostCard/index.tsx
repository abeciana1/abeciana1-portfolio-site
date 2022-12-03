import React, { useState, KeyboardEvent } from 'react';
import Link from 'next/link'
import moment from 'moment';
import cx from 'classnames'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

interface TagI {
    id: string;
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

    const [ mouseHover, setHover ] = useState(false)

    return (
        <React.Fragment>
            <Link
                onFocus={() => setHover(!mouseHover)}
                onBlur={() => setHover(!mouseHover)}
                className="z-40"
                href={`/blog/${slug}`}
            >
                <Transition
                    show={true}
                    enter="transition ease-in-out duration-1000 transform"
                    leave="transition ease-in-out duration-1000 transform"
                >
                    <div
                        onMouseEnter={() => setHover(!mouseHover)}
                        onMouseLeave={() => setHover(!mouseHover)}
                    >
                        <Image
                            src={post["hostedImage"]["rich_text"][0]["plain_text"]}
                            width={1000}
                            height={500}
                            alt={"Alex Beciana - " + title}
                        />
                    </div>
                    <Transition
                        show={mouseHover || active}
                        enter="transition ease-in-out duration-700 transform"
                        enterFrom="-translate-y-0 opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition ease-in-out duration-700 transform"
                        leaveFrom="translate-y-0 opacity-100"
                        leaveTo="-translate-y-0 opacity-0"
                    >
                        <div className="w-full bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl">
                            <div
                                className="font-medium text-lg px-2 flex flex-wrap"
                            >
                                {title + " — " + moment(new Date(publishedDate)).add(1, 'days').format("MMM Do YY")}
                            </div>
                            <div
                                className="flex flex-wrap px-1"
                            >
                                {tags.map(({ id, color, name }: TagI) => {
                                    return (<span
                                        key={id}
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
                    </Transition>
                </Transition>
            </Link>
        </React.Fragment>
    )
}

export default BlogPostCard