import React from 'react'
import { HeroSectionWithLinkGradientBG } from '../components/sections'
import profileCallout from '../public/profile-callout-edited.webp'
import DeskVector from '../public/services/deskvector-without-bg.svg'
import DigitalMarketing from '../public/services/Digital Marketing icon.svg'
import Engineering from '../public/services/Engineering icon.svg'
import UIDesign from '../public/services/UI Design icon.svg'
import UXDesign from '../public/services/UX Design icon.svg'
import { lazily } from 'react-lazily'
const { ServiceIcon } = lazily(() => import('../components/utils/_icons'))
import Clients from '../data/clients.json'
import Logo, { ILogo } from '../components/cards/Logo'
import { ThreeColumnGrid } from '../components/layouts'

const FreelancePage = (): JSX.Element => {

    return (
        <React.Fragment>
            <HeroSectionWithLinkGradientBG
                heading="Let's work together"
                taglineBody="Experienced frontend developer and software engineer. Offering services in web and software development, digital marketing, and community management. Expert at working across technical and non-technical teams."
                image={profileCallout}
                imageAlt="Alex Beciana | Freelance services"
                imageClassName="profile-callout"
                reverseOrder={true}
                gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
            />
            <section className="text-center relative z-50 mt-20">
                <h2 className="text-4xl">I've worked with</h2>
                <ThreeColumnGrid addClass="my-20 gap-10 lg:gap-20">
                    {Clients.map(({
                        name,
                        logo,
                        height,
                        width
                    }: ILogo) => {
                        return (
                            <Logo
                                name={name}
                                logo={logo}
                                width={width}
                                height={height}
                            />
                        )
                    })}
                </ThreeColumnGrid>
            </section>
        </React.Fragment>
    )
}

export default FreelancePage