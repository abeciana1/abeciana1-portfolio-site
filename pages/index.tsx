import { Suspense } from 'react'
import { lazily } from 'react-lazily'
import { CustomHead } from '@/components/utils/CustomHead'
import { SkillCardGrid, TwoColumnGrid } from '@/components/layouts'
import { HeroSectionWithLinkGradientBG } from '@/components/sections'
import { PreRenderLinkAsBtn } from '@/components/utils/PreRenderLink'
import { ExpandBtnLink } from '@/components/utils/_buttons'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub, AiOutlineBehance } from "react-icons/ai";
import profileCallout from '@/public/profile-callout-edited.webp'
import { GetStaticProps } from 'next'
import { ISkillCard, IJoke } from '@/interfaces'
import { ScrollToTopBtn } from '@/components/utils/_buttons'
import SkillCard from '@/components/cards/SkillCard'
const {
  CodeMockup,
  CodeMockupLine
} = lazily(() => import('../components/utils/CodeMockup'))
import { gql, GraphQLClient } from 'graphql-request'
import jokes from '@/data/jokes.json'

export default function Home(
  { 
    joke,
    skills
  }: {joke: IJoke, skills: ISkillCard[]}
  ) {

  return (
    <>
      <CustomHead
        description='Full stack software engineer with three years of experience with an entrepreneurial spirit.'
        image="./profile-callout-edited.webp"
      />
      <HeroSectionWithLinkGradientBG
        heading="Hi I'm Alex Beciana"
        taglineBody="Full stack software engineer with three years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps."
        image={profileCallout}
        imageAlt="Animated illustration of me - Alex Beciana"
        imageClassName="profile-callout  hidden sm:inline"
        reverseOrder
        gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
      />
      <div className="flex flex-col pt-5 space-y-4 md:space-y-0 md:pt-0 md:flex-row flex-wrap md:space-x-8">
        <PreRenderLinkAsBtn
          href="/about"
          linkText="More about me"
          alt="portfolio page"
          ctaButtonColor="altYellow"
          showArrow
        />
        {/* <PreRenderLinkAsBtn
          href="/blog"
          linkText="My blog posts"
          alt="portfolio page"
          ctaButtonColor="altYellow"
          showArrow={true}
        /> */}
        <PreRenderLinkAsBtn
            href="/references"
            linkText="My references"
            alt="references page"
            ctaButtonColor="altYellow"
            showArrow
        />
      </div>
      <div className="flex pb-8 space-x-4 md:space-y-0 pt-5 flex-row relative items-center">
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
          ariaLabel="Link to Alex Beciana Behance profile"
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <TwoColumnGrid addClass="mt-12 gap-12">
          <section>
            <h2 className="text-4xl">Dev Dad Jokes</h2>
            <div className="leading-10 text-lg xl:text-xl xl:leading-loose">Short and sweet jokes that are so bad, yet so good.</div>
          </section>
          <section>
            <CodeMockup
              enableSection={true}
              background="black"
            >
              <CodeMockupLine
                prefix="$"
                textColor="warning"
                text={joke?.question}
              />
              <CodeMockupLine
                prefix=">"
                textColor="success"
                text={joke?.punchline}
              />
            </CodeMockup>
          </section>
        </TwoColumnGrid>
        <TwoColumnGrid addClass="mt-12 gap-12">
          <section>
            <h2 className="text-4xl">Always learning, always growing</h2>
            <div className="leading-10 text-lg xl:text-xl xl:leading-loose">Here's what I'm working on!</div>
          </section>
          <section>
            <CodeMockup
              enableSection={true}
              background="black"
            >
              <CodeMockupLine
                prefix="$"
                textColor="warning"
                text="Drop The Needle"
              />
              <CodeMockupLine
                prefix=">"
                textColor="success"
                text="A music app to craft collaborative power hours with friends"
              />
              <CodeMockupLine
                prefix="$"
                textColor="warning"
                text="Thinking of topics to blog about"
              />
              <CodeMockupLine
                prefix="$"
                textColor="warning"
                text="Improving my data structures and algorithms skills"
              />
              <CodeMockupLine
                prefix="$"
                textColor="warning"
                text="Freelancing"
              />
            </CodeMockup>
          </section>
        </TwoColumnGrid>
      </Suspense>
      <Suspense fallback={<div>isLoading...</div>}>
        <section
            className="mt-12"
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
      <ScrollToTopBtn/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const skillsClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")

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

  const joke = jokes[Math.floor(Math.random()*jokes.length)]

  const { skills }: {skills: ISkillCard[]} = await skillsClient.request(skillQuery)

  return {
    props: {
      joke: joke,
      skills: skills
    },
    revalidate: 600
  }
}