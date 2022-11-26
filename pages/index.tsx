import React from 'react'
import CustomHead from '../components/utils/CustomHead'
import { PageMargin } from '../components/layouts'
import { HeroSectionWithLinkGradientBG } from '../components/sections'
import Image from 'next/image'
import { CodeMockup, CodeMockupLine } from '../components/utils/CodeMockup'
import Skills from '../data/skills.json'
import SkillCard from '../components/cards/SkillCard'
import { PreRenderLinkAsBtn } from '../components/utils/PreRenderLink'
import { TwoColumnGrid } from '../components/layouts'

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
      <PageMargin>
      <div className="justify-item-center self-center mx-auto z-50 block md:hidden drop-shadow-xl">
        <Image 
          src="/profile-pic.png"
          width={150}
          height={150}
          priority
          className="profile-pic-simple"
          alt="Alex Beciana"
        />
      </div>
        <HeroSectionWithLinkGradientBG
          heading="Hi I'm Alex Beciana"
          taglineBody="Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps."
          image="/profile-callout-edited.png"
          imageAlt="Alex Beciana (animated)"
          imageClassName="profile-callout"
          reverseOrder={true}
          gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
        />
        <div className="flex flex-col pt-8 space-y-4 md:space-y-0 md:pt-4 lg:pt-0 md:flex-row md:space-x-8">
          <PreRenderLinkAsBtn
            href="/portfolio"
            linkText="What I'm working on"
            alt="portfolio page"
            ctaButtonColor="altYellow"
            showArrow={true}
          />
          <PreRenderLinkAsBtn
            href="/portfolio"
            linkText="What I've written"
            alt="portfolio page"
            ctaButtonColor="altYellow"
            showArrow={true}
          />
        </div>
        <TwoColumnGrid addClass="mt-20 gap-20">
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
        <TwoColumnGrid addClass="mt-20 gap-20">
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
                text="A music to craft collaborative power hours with friends"
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
        <section
            className="mt-20"
        >
            <h2
                id="skills"
                className="text-4xl font-reross text-altYellow leading-relaxed"
            >skills</h2>
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
      </PageMargin>
    </React.Fragment>
  )
}

export async function getStaticProps() {

  const res = await fetch("https://backend-omega-seven.vercel.app/api/getjoke")
  const jokes = await res.json()

  return {
    props: {
      joke: jokes[0],
    }
  }
}