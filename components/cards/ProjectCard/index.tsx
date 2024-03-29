import Link from 'next/link'
import Image from 'next/image'
import { TagCard } from '@/components/cards/TagCard'
import { IProjectData } from '@/interfaces'
import { projectStatusColors } from '@/lib/helper-functions'

const ProjectCard = ({
    project
}: {project: IProjectData}) => {
    
    return (
        <>
            <Link
                className="z-40"
                href={`/projects/${encodeURIComponent(project.slug)}`}
            >
                <div className="px-2 py-2 bg-white z-30 rounded-bl-lg rounded-br-lg shadow-xl">
                    <div className="flex justify-content">
                        <Image
                            src={project.featuredImage?.url}
                            width={350}
                            height={400}
                            alt={`Alex Beciana | Portfolio Project | ${project.projectTitle}`}
                            priority
                            className='mx-auto h-56 w-auto'
                        />
                    </div>
                    <div
                        className="font-bold text-lg flex flex-wrap items-center"
                    >
                        {project.projectTitle}
                        {project.projectStatus && 
                            <TagCard
                                id={project.id}
                                color={projectStatusColors?.[`${project.projectStatus}`]?.color}
                                tagName={projectStatusColors?.[`${project.projectStatus}`]?.text}
                                addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                            />
                        }
                    </div>
                    <span className="font-normal">{project.excerpt.substring(0, 100)}...</span>
                </div>
            </Link>
        </>
    )
}

export default ProjectCard