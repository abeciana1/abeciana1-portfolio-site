import React, { Suspense, lazy } from 'react'
import { lazily } from 'react-lazily'
import { CustomHead } from '../components/utils/CustomHead'
import { SkillCardGrid, TwoColumnGrid } from '../components/layouts'
import { HeroSectionWithLinkGradientBG } from '../components/sections'
import Skills from '../data/skills.json'
import { PreRenderLinkAsBtn } from '../components/utils/PreRenderLink'
import { ExpandBtnLink } from '../components/utils/_buttons'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub, AiOutlineBehance } from "react-icons/ai";
import profileCallout from '../public/profile-callout-edited.webp'
import { GetStaticProps } from 'next'

const SkillCard = lazy(() => import('../components/cards/SkillCard'))
const {
  CodeMockup,
  CodeMockupLine
} = lazily(() => import('../components/utils/CodeMockup'))

interface SkillI {
  name: string;
  image: string;
}

export default function Home({ joke }: any) {

  return (
    <React.Fragment>
      <CustomHead
        description='Full stack software engineer with two years of experience with an entrepreneurial spirit.'
      />
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
          ariaLabel="Link to Alex Beciana Behance profile"
        />
      </div>
      <div className="flex flex-col pt-8 space-y-4 md:space-y-0 md:pt-4 lg:pt-0 md:flex-row md:space-x-8">
        <PreRenderLinkAsBtn
          href="/about"
          linkText="More about me"
          alt="portfolio page"
          ctaButtonColor="altYellow"
          showArrow={true}
        />
        <PreRenderLinkAsBtn
          href="/blog"
          linkText="My blog posts"
          alt="portfolio page"
          ctaButtonColor="altYellow"
          showArrow={true}
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
            <SkillCardGrid>
            {Skills.map(({ name, image }: SkillI, index: number) => {
              return (
                    <SkillCard
                      key={index + 1}
                      name={name}
                      image={image}
                    />
                  )
              })}
            </SkillCardGrid>
        </section>
      </Suspense>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch("https://backend-omega-seven.vercel.app/api/getjoke")
  const jokes = await res.json()

  return {
    props: {
      joke: jokes[0],
    },
    revalidate: 600
  }
}