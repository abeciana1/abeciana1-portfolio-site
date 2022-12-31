import React from 'react'
import { CustomHead } from '../components/utils/CustomHead'
import { PageMargin } from '../components/layouts'
import { HeroSectionWithLinkGradientBG } from '../components/sections'
import Skills from '../data/skills.json'
import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps } from 'next'
import { ExpandBtnLink } from '../components/utils/_buttons'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub, AiOutlineBehance } from "react-icons/ai";
import dynamic from 'next/dynamic';
import useResponsiveness from '../lib/useResponsiveness'
import profileCallout from '../public/profile-callout-edited.webp'

const SkillCard = dynamic(() => import('../components/cards/SkillCard'), {
    ssr: false
})
const JobCard = dynamic(() => import('../components/cards/JobCard'), {
    ssr: false
})
const EduCard = dynamic(() => import('../components/cards/EduCard'), {
    ssr: false
})

interface SkillI {
    name: string;
    image: string;
}

const AboutPage = ({ expData }: any) => {

    const {
        jobs,
        educations
    } = expData

    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
    } = mediaQueryRender || {}

    const showMobileNav = (isMobile || isTablet)

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
                    image={profileCallout}
                    imageAlt="Alex Beciana (animated)"
                    imageClassName="profile-callout"
                    reverseOrder={true}
                    gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
                />
                        <div className="flex pb-8 space-x-4 md:space-y-0 pt-4 lg:pt-0 flex-row relative items-center">
                            <ExpandBtnLink
                                icon={TiSocialLinkedin}
                                text="LinkedIn"
                                textColor="white"
                                backgroundColor="black"
                                href="https://www.linkedin.com/in/alexbeciana"
                                addClass="hover:w-32"
                                ariaLabel="Link to Alex Beciana LinkedIn profile"
                            />
                            <ExpandBtnLink
                                icon={AiOutlineGithub}
                                text="GitHub"
                                textColor="white"
                                backgroundColor="black"
                                href="https://github.com/abeciana1"
                                addClass="hover:w-32"
                                ariaLabel="Link to Alex Beciana GitHub profile"
                            />
                            <ExpandBtnLink
                                icon={AiOutlineBehance}
                                text="Behance"
                                textColor="white"
                                backgroundColor="black"
                                href="https://www.behance.net/alexbeciana"
                                addClass="hover:w-32"
                                ariaLabel="Link to Alex Beciana Behace profile"
                            />
                        </div>
                <section
                    className="mt-12 relative"
                >
                    <h2
                        id="skills"
                        className="text-4xl leading-relaxed"
                    >Skills</h2>
                    <section
                        className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10"
                    >
                    {Skills.map(({name, image}: SkillI, index:number) => {
                        return (
                            <SkillCard
                            key={index + 1}
                            name={name}
                            image={image}
                            />
                        )
                    })}
                    </section>
                </section>
                <section className="mt-12">
                    <h2
                        id="experience"
                        className="text-4xl leading-relaxed"
                    >Experience</h2>
                    {jobs?.map((job: any) => {
                    return (
                        <JobCard
                            key={job?.id}
                            id={job?.id}
                            position={job?.position}
                            startDate={job?.startDate}
                            companyName={job?.companyName}
                            companyWebsite={job?.companyWebsite}
                            companyDescription={job?.companyDescription}
                            companyLogo={job?.companyLogo?.url}
                            endDate={job?.endDate}
                            responsibilities={job?.responsibilities}
                        />
                    )
                    })}
                </section>
                <section
                    id="education"
                    className="mt-12"
                >
                    <h2
                        className="text-4xl leading-relaxed"
                    >Education</h2>
                    {educations?.map((school: any) => {
                        return (
                        <EduCard
                            key={school?.id}
                            id={school?.id}
                            schoolName={school?.schoolName}
                            schoolWebsite={school?.schoolWebsite}
                            schoolImage={school?.schoolImage?.url}
                            achievements={school?.achievements}
                        />
                        )
                        })}
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const expClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")
    
    const expQuery = gql`
        query {
        jobs(orderBy: endDate_DESC) {
            id
            position
            startDate
            companyName
            companyWebsite
            companyDescription
            companyLogo {
            url
            }
            endDate
            responsibilities
        }
        educations {
            id
            schoolName
            schoolWebsite
            schoolImage {
            url
            }
            achievements
        }
        }`
        
    const expData = await expClient.request(expQuery)

    return {
        props: {
        expData: expData
        },
        revalidate: 600
    }
}

export default AboutPage