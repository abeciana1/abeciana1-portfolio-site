import React from 'react'
import CustomHead from '../components/utils/CustomHead'
import { PageMargin } from '../components/layouts'
import { HeroSectionWithLinkGradientBG } from '../components/sections'
import Image from 'next/image'
import { CodeMockup, CodeMockupLine } from '../components/utils/CodeMockup'

export default function Home() {
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
          cta="About Me"
          ctaHref="/about"
          ctaAlt="About page"
          ctaButtonColor="altYellow"
          gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
        />
        <CodeMockup
          enableSection={true}
          background="black"
        >
          <CodeMockupLine
            key={1}
            prefix="$"
            text="testing line 1testing line 1testing line 1testing line 1testing line 1testing line 1"
          />
          <CodeMockupLine
            key={2}
            prefix="$"
            text="testing line 2"
          />
        </CodeMockup>
      </PageMargin>
    </React.Fragment>
  )
}

