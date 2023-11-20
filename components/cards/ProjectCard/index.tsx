import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { TagCard } from '../TagCard'
import { IProjectCard } from '@/interfaces'


const ProjectCard = ({
    project
}: {project: IProjectCard}) => {

    const {
        name,
        bio,
        logo
    } = project.client
    
    return (
        <React.Fragment>
            <Link
                className="z-40"
                href={`/portfolio/${encodeURIComponent(project.slug)}`}
            >
                <div className="px-2 py-2 bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl">
                    <div className="flex justify-content">
                        <Image
                            src={logo}
                            width={350}
                            height={400}
                            alt={`Alex Beciana - Portfolio - ${project.title}`}
                        />
                    </div>
                    <div
                        className="font-bold text-lg px-2 flex flex-wrap items-center"
                    >
                        {project.title}
                        {project.status && 
                            <TagCard
                                id={project.status.id}
                                color={project.status.color}
                                tagName={project.status.tagName}
                                addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                            />
                        }
                        {project.clientType &&
                            <TagCard
                                id={project.clientType.id}
                                color={project.clientType.color}
                                tagName={project.clientType.tagName}
                                addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                            />
                        }
                    </div>
                    <div
                        className="font-bold px-2"
                    >
                        {name}
                        <span className="font-normal"> | {bio.substring(0, 100)}...</span>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default ProjectCard