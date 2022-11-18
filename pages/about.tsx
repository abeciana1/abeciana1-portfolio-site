import React from 'react'
import CustomHead from '../components/utils/CustomHead'
import { PageMargin } from '../components/layouts'
import { HeroSectionWithLinkGradientBG } from '../components/sections'
import Skills from '../data/skills.json'

const AboutPage = (props:any) => {
    return (
        <React.Fragment>
            <CustomHead
                title="About"
                description="Alex Beciana | Work experience and education as a digital marketer, community manager, and full-stack software engineer"
            />
            <PageMargin>
                <HeroSectionWithLinkGradientBG
                    heading="Hi I'm Alex Beciana"
                    taglineBody="Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps."
                    image="/profile-callout-edited.png"
                    imageAlt="Alex Beciana (animated)"
                    imageClassName="profile-callout"
                    reverseOrder={true}
                    gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
                />
            </PageMargin>
        </React.Fragment>
    )
}

export const getStaticProps = async () => {
    return {
        props: {}
    }
}

export default AboutPage