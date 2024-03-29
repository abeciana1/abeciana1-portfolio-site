import { HeroSectionWithLinkGradientBG } from '@/components/sections'
import { lazily } from 'react-lazily'
const { ServiceIcon } = lazily(() => import('@/components/utils/_icons'))
import Clients from '@/data/clients.json'
import Logo from '@/components/cards/Logo'
import { ILogo } from '@/interfaces'
import { TwoColumnGrid, ThreeColumnGrid } from '@/components/layouts'
import { CustomHead } from '@/components/utils/CustomHead'
import { RiAspectRatioFill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { BiSolidBookContent } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";
import { PiEngineFill } from "react-icons/pi";
import { PreRenderLinkAsBtn } from '@/components/utils/PreRenderLink'

const FreelancePage = (): JSX.Element => {

    return (
        <>
            <CustomHead
                title="AB Creative Freelancing"
                description="Alex Beciana | Empower your brand online with top-notch web and app development services. Elevate user experience and drive success with our expert solutions."
            />
            <HeroSectionWithLinkGradientBG
                heading="Let's work together"
                taglineBody="Experienced frontend developer and software engineer. Offering services in web and software development, digital marketing, and community management. Expert at working across technical and non-technical teams."
                image={'https://media.graphassets.com/output=format:webp/Bwz9zHRxS1S79v3Ppax0'}
                imageAlt="AB Creative logo"
                imageClassName="profile-callout hidden sm:inline"
                reverseOrder
                gradientClass="bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400"
            />
            <div className='flex flex-col pt-5 space-y-4 md:space-y-0 md:pt-0 md:flex-row md:space-x-8'>
                <PreRenderLinkAsBtn
                    href="/about"
                    linkText="More about me"
                    alt="portfolio page"
                    ctaButtonColor="altYellow"
                    showArrow
                />
                <PreRenderLinkAsBtn
                    href="/references"
                    linkText="My references"
                    alt="references page"
                    ctaButtonColor="altYellow"
                    showArrow
                />
            </div>
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
                        title='Frontend Development'
                        icon={IoStorefrontSharp}
                        text="Craft visually stunning and intuitive user interfaces, ensuring a seamless and enjoyable user experience on your websites and applications."
                        color="red"
                    />
                    <ServiceIcon
                        title='Responsive Website Design'
                        icon={RiAspectRatioFill}
                        text="Craft visually appealing and user-friendly websites that adapt seamlessly to various devices, ensuring an optimal viewing experience."
                        color="red"
                    />
                    <ServiceIcon
                        title='Content Management Systems (CMS)'
                        icon={BiSolidBookContent}
                        text="Implement user-friendly CMS platforms, empowering clients to easily manage and update their website content without technical expertise."
                        color="blue"
                    />
                    <ServiceIcon
                        title='API Integration Services'
                        icon={FaGear}
                        text="Enhance functionality and connectivity by integrating third-party APIs, ensuring seamless communication between different software applications for improved performance."
                        color="blue"
                    />
                    <ServiceIcon
                        title='Backend Development'
                        icon={PiEngineFill}
                        text="Power your applications with robust and scalable backend systems. From database management to server-side logic, we optimize functionality, ensuring seamless performance and data integrity."
                        color="yellow"
                    />
                    <ServiceIcon
                        title='Performance Optimization'
                        icon={PiEngineFill}
                        text="Enhance the speed and efficiency of your digital assets. Our performance optimization services focus on streamlining code, improving server response times, and optimizing database queries to ensure your websites and applications deliver a lightning-fast and responsive user experience."
                        color="yellow"
                    />
                </TwoColumnGrid>
            </section>
        </>
    )
}

export default FreelancePage