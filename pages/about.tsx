import { Suspense,lazy } from 'react'
import { CustomHead } from '@/components/utils/CustomHead'
import { SocialProfileJsonLd } from 'next-seo';
import { SkillCardGrid } from '@/components/layouts'
import { HeroSectionWithLinkGradientBG } from '@/components/sections'
import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticProps } from 'next'
import { ExpandBtnLink } from '@/components/utils/_buttons'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub, AiOutlineBehance } from "react-icons/ai";
import profileCallout from '@/public/profile-callout-edited.webp'
import { ISkillCard } from '@/interfaces'
import { ScrollToTopBtn } from '@/components/utils/_buttons'
import SkillCard from '@/components/cards/SkillCard'
const JobCard = lazy(() => import('../components/cards/JobCard'))
const EduCard = lazy(() => import('../components/cards/EduCard'))
import { PreRenderLinkAsBtn } from '@/components/utils/PreRenderLink'
import { IJob, IEducation, IExperience } from '@/interfaces'

const AboutPage = ({ expData, skills }: any) => {

    const {
        jobs,
        educations
    } = expData

    return (
        <>
            <CustomHead
                title="About"
                description="Alex Beciana | Work experience and education as a digital marketer, community manager, and full-stack software engineer"
                image="./profile-callout-edited.webp"
            />
            <SocialProfileJsonLd
                type="Person"
                name="Alex Beciana"
                url="https://alexbeciana.com/"
                sameAs={[
                    "https://www.linkedin.com/in/alexbeciana/",
                    "https://github.com/abeciana1",
                    "https://www.behance.net/alexbeciana"
                ]}
            />
            <section>
                <HeroSectionWithLinkGradientBG
                    heading="Hi I'm Alex Beciana"
                    taglineBody="Full stack software engineer with three years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps."
                    image={profileCallout}
                    imageAlt="Animated illustration of me - Alex Beciana"
                    imageClassName="profile-callout"
                    reverseOrder={true}
                    gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
                />
                    <div className="py-5">
                        <PreRenderLinkAsBtn
                            href="/references"
                            linkText="My references"
                            alt="references page"
                            ctaButtonColor="altYellow"
                            showArrow
                        />
                    </div>
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
                            addClass="hover:w-28"
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
                <Suspense fallback={<div>Loading...</div>}>
                    <section
                        className="mt-12 relative"
                    >
                        <h2
                            id="skills"
                            className="text-4xl leading-relaxed"
                        >Skills</h2>
                        {skills && skills?.length > 0 &&
                        <SkillCardGrid>
                        {skills.map(({ id, name, image }: ISkillCard) => {
                            return (
                                <SkillCard
                                    key={id}
                                    name={name}
                                    image={image}
                                />
                                )
                            })}
                        </SkillCardGrid>
                        }
                    </section>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <section className="mt-12">
                        <h2
                            id="experience"
                            className="text-4xl leading-relaxed"
                        >Experience</h2>
                        {jobs?.map((job: IJob) => {
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
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>

                    <section
                        id="education"
                        className="mt-12"
                    >
                        <h2
                            className="text-4xl leading-relaxed"
                        >Education</h2>
                        {educations?.map((school: IEducation) => {
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
                </Suspense>
                <ScrollToTopBtn/>
            </section>
        </>
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
        
    const skillQuery = gql`
        query skills {
        skills(stage: PUBLISHED) {
            name
            id
            image {
            alt
            url(transformation: {document: {output: {format: webp}}})
            }
        }
        }
    `

    const expData: IExperience = await expClient.request(expQuery)
    const { skills }: {skills: ISkillCard[]} = await expClient.request(skillQuery)


    return {
        props: {
            expData: expData,
            skills: skills
        },
        revalidate: 600
    }
}

export default AboutPage