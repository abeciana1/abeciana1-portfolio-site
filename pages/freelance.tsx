import React from 'react'
import { HeroSectionWithLinkGradientBG } from '@/components/sections'
import profileCallout from '@/public/profile-callout-edited.webp'
// import DeskVector from '@/public/services/deskvector-without-bg.svg'
// import DigitalMarketing from '@/public/services/Digital Marketing icon.svg'
// import UIDesign from '@/public/services/UI Design icon.svg'
// import UXDesign from '@/public/services/UX Design icon.svg'
import Engineering from '@/public/services/Engineeringicon'
import { lazily } from 'react-lazily'
const { ServiceIcon } = lazily(() => import('@/components/utils/_icons'))
import Clients from '@/data/clients.json'
import Logo from '@/components/cards/Logo'
import { ILogo } from '@/interfaces'
import { TwoColumnGrid, ThreeColumnGrid } from '@/components/layouts'

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
                <ThreeColumnGrid addClass="mt-20 gap-10 lg:gap-20">
                    {Clients.map(({
                        name,
                        logo,
                        height,
                        width
                    }: ILogo, index: number) => {
                        return (
                            <Logo
                                key={index}
                                name={name}
                                logo={logo}
                                width={width}
                                height={height}
                            />
                        )
                    })}
                </ThreeColumnGrid>
            </section>
            <section className="my-20">
                <h2 className="text-4xl text-center relative z-50">My offerings</h2>
                <TwoColumnGrid addClass="mt-20 gap-20">
                    <ServiceIcon
                        icon={Engineering}
                        text="Specializing frontend development services that deliver clean and efficient code for web applications and sites. With my expertise, I can provide you with a modern, accessible, SEO-friendly, and responsive user interface that enhances user experience. Timely delivery within your budget. Ongoing support is also available."
                        color="blue"
                    />
                    <ServiceIcon
                        icon={Engineering}
                        text="Specializing frontend development services that deliver clean and efficient code for web applications and sites. With my expertise, I can provide you with a modern, accessible, SEO-friendly, and responsive user interface that enhances user experience. Timely delivery within your budget. Ongoing support is also available."
                        color="blue"
                    />
                    <ServiceIcon
                        icon={Engineering}
                        text="Specializing frontend development services that deliver clean and efficient code for web applications and sites. With my expertise, I can provide you with a modern, accessible, SEO-friendly, and responsive user interface that enhances user experience. Timely delivery within your budget. Ongoing support is also available."
                        color="blue"
                    />
                    <ServiceIcon
                        icon={Engineering}
                        text="Specializing frontend development services that deliver clean and efficient code for web applications and sites. With my expertise, I can provide you with a modern, accessible, SEO-friendly, and responsive user interface that enhances user experience. Timely delivery within your budget. Ongoing support is also available."
                        color="blue"
                    />
                </TwoColumnGrid>
            </section>
        </React.Fragment>
    )
}

export default FreelancePage