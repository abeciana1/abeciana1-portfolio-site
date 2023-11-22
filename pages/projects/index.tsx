import React from 'react'
import { GetStaticProps } from 'next'
import { CustomHead } from '@/components/utils/CustomHead'
import dynamic from 'next/dynamic';
import { gql, GraphQLClient } from 'graphql-request'
import { IProjectData } from '@/interfaces'

const ProjectCard = dynamic(() => import('@/components/cards/ProjectCard'), {
    ssr: false
})

const PortfolioPage = ({
    projects
}: {projects: IProjectData[]}) => {

    console.log({projects})

    return (
        <React.Fragment>
            <CustomHead
                title="Portfolio"
                description="Alex Beciana | Creating projects for myself, friends, and clients."
            />
            <>
                <h2
                    className="text-4xl leading-relaxed"
                >Portfolio projects</h2>
                <section
                    className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {projects?.map((project: IProjectData) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                project={project} 
                            />
                        )
                    })}
                </section>
            </>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const allProjects = gql`
        query projects {
        projects(stage: PUBLISHED) {
            id
            excerpt
            projectLink
            projectLinks
            projectStatus
            projectTitle
            slug
            featuredImage {
            url(transformation: {document: {output: {format: webp}}})
            }
        }
        }
    `

    const projectClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")
    const projectData: any = await projectClient.request(allProjects)

    return {
        props: {
            projects: projectData.projects
        },
        revalidate: 600
    }
}


export default PortfolioPage