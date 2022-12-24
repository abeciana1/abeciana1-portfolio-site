import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { TagCard } from '../TagCard'
import {
    getProjectSlug,
    getClientInfo,
    getProjectTitle,
    getProjectStatus,
    getClientType
} from '../../../lib/notion-proj-props'


const ProjectCard = ({
    project
}: any) => {

    const slug = getProjectSlug(project)
    const client = getClientInfo(project)
    const title = getProjectTitle(project)
    const status = getProjectStatus(project)
    const clientType = getClientType(project)

    const {
        name,
        bio,
        logo
    } = client
    
    return (
        <React.Fragment>
            <Link
                className="z-40"
                href={`/portfolio/${encodeURIComponent(slug)}`}
            >
                <div className="px-2 py-2 bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl">
                    <div className="flex justify-content">
                        <Image
                            src={logo}
                            width={350}
                            height={400}
                            alt={"Alex Beciana - Portfolio - " + title}
                        />
                    </div>
                    <div
                        className="font-bold text-lg px-2 flex flex-wrap items-center"
                    >
                        {title}
                        {status && 
                            <TagCard
                                id={status.id}
                                color={status.color}
                                name={status.name}
                                addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                            />
                        }
                        {clientType &&
                            <TagCard
                                id={clientType.id}
                                color={clientType.color}
                                name={clientType.name}
                                addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                            />
                        }
                    </div>
                    <div
                        className="font-bold px-2"
                    >
                        {name}
                        <span className="font-normal"> | {bio}</span>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default ProjectCard