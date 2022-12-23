import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getDatabase } from '../../lib/helper-functions'
import { PageMargin } from '../../components/layouts'
import { TagCard } from '../../components/cards/TagCard'
import {
    getProjectSlug,
    getClientInfo,
    getProjectTitle,
    getProjectStatus,
    getClientType,
    getProjectTools,
    getProjectWorkAreas
} from '../../lib/notion-proj-props'
import { NotionRenderer, BlockMapType } from "react-notion";
import ClientCard from '../../components/cards/ClientCard'

const PortfolioProjectPage = ({ project, blocks }: any) => {

    const slug = getProjectSlug(project)
    const client = getClientInfo(project)
    const title = getProjectTitle(project)
    const status = getProjectStatus(project)
    const clientType = getClientType(project)
    const projectTools = getProjectTools(project)
    const workAreas = getProjectWorkAreas(project)

    const {
        name,
        bio,
        logo,
        link
    } = client

    return (
        <React.Fragment>
            <PageMargin>
                <h1 className="text-5xl font-reross leading-relaxed">{title}</h1>
                <section className="flex space-x-10">
                    <aside className="mt-16 basis-1/4">
                        <ClientCard
                            name={name}
                            bio={bio}
                            logo={logo}
                            link={link}
                        />
                    </aside>
                    <section
                        className="py-4 break-words basis-3/4 max-w-3xl"
                    >
                        <NotionRenderer blockMap={blocks} />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default PortfolioProjectPage

export const getStaticPaths: GetStaticPaths = async (context: any) => {
    const projects = await getDatabase(process.env.NOTION_PORTFOLIO_DATABASE_ID)
    let paths = projects.map((project: any) => {
        let slug = getProjectSlug(project.properties)
        return {
            params: {
                slug: slug
            }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    const projects = await getDatabase(process.env.NOTION_PORTFOLIO_DATABASE_ID)

    const project = projects.find((proj: any) => {
        let slug = getProjectSlug(proj.properties)
        if (slug === context.params.slug) {
            return proj
        }
    })

    const blocks: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${project.id}`).then((res) => res.json());

    return {
        props: {
            project: project.properties,
            blocks
        },
        revalidate: 5
    }
}