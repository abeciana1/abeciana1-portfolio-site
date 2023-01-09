import React, { useState } from 'react';
import Link from 'next/link'
import { format, add } from 'date-fns'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { TagCard, TagI } from '../TagCard'
import {
    slugProp,
    titleProp,
    publishedDateProp,
    tagsProp,
    excerptProp,
    hostedImageProp
} from '../../../lib/notion-blog-props'

interface BlogPostCardI {
    post: any;
    imagePriority?: boolean;
    active: boolean;
}

const BlogPostCard = ({ post, active, imagePriority = false }: BlogPostCardI) => {
    const slug = slugProp(post)
    const title = titleProp(post)
    const publishedDate = publishedDateProp(post)
    const tags = tagsProp(post)
    const excerpt = excerptProp(post)
    const hostedImage = hostedImageProp(post)

    const [ mouseHover, setHover ] = useState(false)

    return (
        <React.Fragment>
            <Link
                onFocus={() => setHover(!mouseHover)}
                onBlur={() => setHover(!mouseHover)}
                className="z-40"
                href={`/blog/${encodeURIComponent(slug)}`}
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
                            src={hostedImage}
                            width={1000}
                            height={500}
                            priority={imagePriority}
                            alt={`Alex Beciana - ${title}`}
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
                                {`${title} - ${format(add(new Date(publishedDate), {days: 1}), "MMM do yy")}`}
                            </div>
                            <div
                                className="flex flex-wrap px-1"
                            >
                                {tags.map(({ id, color, name }: TagI) => {
                                    return (
                                        <TagCard
                                            key={id}
                                            id={id}
                                            color={color}
                                            name={name}
                                            addClass="ml-1 my-1 py-0.5 px-1.5 rounded-full text-xs leading-tight"
                                        />
                                    )
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