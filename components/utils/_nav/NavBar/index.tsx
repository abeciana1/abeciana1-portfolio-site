import { PreRenderLink } from '@/components/utils/PreRenderLink'
import cx from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'
import useResponsiveness from '@/lib/useResponsiveness'
import { INavBar } from '@/interfaces'

const NavBar = ({
    mobileNavOpen,
    toggleMobileNav
}: INavBar) => {    
    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
        isSmallLaptop,
        isLaptop,
        isXl
    } = mediaQueryRender || {}

    const showDesktopNav = ((isDesktop && isLaptop) || isXl)
    const showMobileNav = (isMobile || isTablet || isSmallLaptop)

    return (
        <>
            <header
                className={cx("z-50",{
                    ["float-left"]: showDesktopNav,
                    ["block flex items-center justify-between bg-white"]: showMobileNav,
                    ["mb-10"]: showMobileNav && mobileNavOpen === false
                })}
            >
                    <PreRenderLink
                        href="/"
                        linkText="Alex Beciana"
                        alt="Homepage"
                        className="text-4xl font-reross cursor-pointer anim-text"
                    />
                    {showMobileNav  &&
                        <Hamburger
                            toggled={mobileNavOpen}
                            toggle={toggleMobileNav}
                            rounded
                            color="#292F36"
                            easing="ease-in"
                            label="menu"
                            size={40}
                        />
                    }
            </header>
            <nav
                className={cx({
                    ["h-screen bg-white z-50 relative"]: showMobileNav && mobileNavOpen
                })}
            >
                {showDesktopNav &&
                    <ul className="self-center ml-60 flex justify-end">
                        <li>
                            <PreRenderLink
                                alt="About page"
                                className="text-4xl mr-5 font-reross cursor-pointer anim-text"
                                linkText="about"
                                href="/about"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Freelance page"
                                className="text-4xl mr-5 font-reross cursor-pointer anim-text"
                                linkText="freelance"
                                href="/freelance"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Projects page"
                                className="text-4xl mr-5 font-reross cursor-pointer anim-text"
                                linkText="projects"
                                href="/projects"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Blog page"
                                className="text-4xl mr-5 font-reross cursor-pointer anim-text"
                                href="/blog"
                                linkText="blog"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Contact page"
                                className="text-4xl font-reross cursor-pointer anim-text"
                                href="/contact"
                                linkText="contact"
                            />
                        </li>
                    </ul>
                }
                {showMobileNav && mobileNavOpen &&
                    <ul className="ml-6 flex flex-col gap-y-8 absolute left-0 top-10 md:px-5">
                        <li
                            onClick={toggleMobileNav}
                        >
                            <PreRenderLink
                                alt="About page"
                                className="text-4xl font-reross cursor-pointer anim-text"
                                linkText="about"
                                href="/about"
                            />
                        </li>
                        <li
                            onClick={toggleMobileNav}
                        >
                            <PreRenderLink
                                alt="Portfolio page"
                                className="text-4xl font-reross cursor-pointer anim-text"
                                linkText="projects"
                                href="/projects"
                                // linkText="freelance"
                                // href="/freelance"
                            />
                        </li>
                        <li
                            onClick={toggleMobileNav}
                        >
                            <PreRenderLink
                                alt="Blog page"
                                className="text-4xl font-reross cursor-pointer anim-text"
                                href="/blog"
                                linkText="blog"
                            />
                        </li>
                        <li
                            onClick={toggleMobileNav}
                        >
                            <PreRenderLink
                                alt="Contact page"
                                className="text-4xl font-reross cursor-pointer anim-text"
                                href="/contact"
                                linkText="contact"
                            />
                        </li>
                    </ul>
                }
            </nav>
        </>
    )
}

export default NavBar