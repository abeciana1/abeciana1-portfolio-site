import React from 'react'
import CustomHead from '../components/utils/CustomHead'
import { PageMargin } from '../components/layouts'
import { HeroSectionWithLinkGradientBG } from '../components/sections'

const AboutPage = () => {
    return (
        <React.Fragment>
            <CustomHead
                title="About"
                description="Alex Beciana | Work experience and education as a digital marketer, community manager, and full-stack software engineer"
            />
            <PageMargin>

            </PageMargin>
        </React.Fragment>
    )
}

export const getStaticProps = async () => {
    
}

export default AboutPage