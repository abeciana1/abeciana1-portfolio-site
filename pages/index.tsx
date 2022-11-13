import React from 'react'
import CustomHead from '../components/utils/CustomHead'
import { PageMargin } from '../components/layouts'
import { HeroSection } from '../components/sections'
import Image from 'next/image'

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
        <HeroSection
          heading="Hi I'm Alex Beciana"
          taglineBody="Full stack software engineer with two years of experience with an entrepreneurial spirit. Previous experience with five  years in digital marketing, product management, and community management, working in tech (startup to FAANG), education, and music as well as leading a profitable startup. Accustomed to working across technical and non-technical teams and managing project roadmaps."
          image="/profile-callout-edited.png"
          imageAlt="Alex Beciana (animated)"
          imageClassName="profile-callout"
          reverseOrder={true}
        />
      </PageMargin>
    </React.Fragment>
  )
}
