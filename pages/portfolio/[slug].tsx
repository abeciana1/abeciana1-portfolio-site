import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getDatabase } from '../../lib/helper-functions'
import { getProjectSlug } from '../../lib/notion-proj-props'

const PortfolioProjectPage = () => {

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default PortfolioProjectPage

export const getStaticPaths: GetStaticPaths = async (context: any) => {

    const projects = await getDatabase(process.env.NOTION_PORTFOLIO_DATABASE_ID)

    let paths = projects.map((project: any) => {
        let slug = getProjectSlug(project)
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
        let slug = getProjectSlug(project)
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