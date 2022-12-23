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
    getClientType
} from '../../lib/notion-proj-props'

const PortfolioProjectPage = ({ project }: any) => {

    console.log(project);

    return (
        <React.Fragment>
            <PageMargin>
                <h1></h1>
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

    return {
        props: {
            project: project.properties
        },
        revalidate: 5
    }
}