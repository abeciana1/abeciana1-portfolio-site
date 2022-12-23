import React from 'react'
import { GetServerSideProps } from 'next'
import { CustomHead } from '../../components/utils/CustomHead'
import { PageMargin } from '../../components/layouts'
import { getDatabase } from '../../lib/helper-functions'
import ProjectCard from '../../components/cards/ProjectCard'

const PortfolioPage = ({
    projects
}: any) => {

    return (
        <React.Fragment>
            <CustomHead
                title="Portfolio"
                description="Alex Beciana | Creating projects for myself, friends, and clients."
            />
            <PageMargin>
                <>
                    <h2
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >portfolio projects</h2>
                    <section
                        className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {projects.map((project: any) => {
                            return <ProjectCard key={project.id} project={project?.properties} />
                        })}
                    </section>
                </>
            </PageMargin>
        </React.Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const response = await getDatabase(process.env.NOTION_PORTFOLIO_DATABASE_ID)

    return {
        props: {
            projects: response
        }
    }
}


export default PortfolioPage