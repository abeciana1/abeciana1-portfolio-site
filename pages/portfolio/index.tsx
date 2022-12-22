import React from 'react'
import { GetServerSideProps } from 'next'
import { CustomHead } from '../../components/utils/CustomHead'
import { PageMargin } from '../../components/layouts'
import { getDatabase } from '../../lib/helper-functions'

const PortfolioPage = () => {


    return (
        <React.Fragment>
            <CustomHead
                title="Portfolio"
                description="Alex Beciana | Creating projects for myself, friends, and clients."
            />
            <PageMargin>

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