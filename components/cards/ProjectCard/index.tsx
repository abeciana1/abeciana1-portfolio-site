import React, { useState } from 'react';
import Link from 'next/link'
import { TagCard, TagI } from '../TagCard'
import { publishedDateProp, hostedImageProp } from '../../../lib/notion-blog-props'

const ProjectCard = ({
    project
}: any) => {

    console.log(project);
    return (
        <React.Fragment>
            <Link
                // onFocus={() => setHover(!mouseHover)}
                // onBlur={() => setHover(!mouseHover)}
                className="z-40"
                href={`/portfolio/${encodeURIComponent(slug)}`}
            >
                <div>
                    {/* <Image
                        src={hostedImage}
                        width={1000}
                        height={500}
                        alt={"Alex Beciana - " + title}
                    /> */}
                </div>
                    <div className="w-full bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl">
                        <div
                            className="font-medium text-lg px-2 flex flex-wrap"
                        >
                            {/* {title + " — " + moment(new Date(publishedDate)).add(1, 'days').format("MMM Do YY")} */}
                        </div>
                        <div
                            className="flex flex-wrap px-1"
                        >
                            {/* {tags.map(({ id, color, name }: TagI) => {
                                return (
                                    <TagCard
                                        key={id}
                                        id={id}
                                        color={color}
                                        name={name}
                                        addClass="ml-1 my-1 py-0.5 px-1.5 rounded-full text-xs leading-tight"
                                    />
                                )
                            })} */}
                            <div
                                className="p-2"
                            >
                                {/* {excerpt} */}
                            </div>
                        </div>
                    </div>
            </Link>
        </React.Fragment>
    )
}

export default ProjectCard