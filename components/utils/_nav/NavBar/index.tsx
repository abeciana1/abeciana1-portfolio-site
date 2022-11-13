import { useState, useEffect } from 'react'
import { PageMargin } from '../../../layouts'
import PreRenderLink from '../../PreRenderLink'
import cx from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'
import useResponsiveness from '../../../../lib/useResponsiveness'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    
    const mediaQueryRender = useResponsiveness()
    console.log(mediaQueryRender);
    const {
        isSmallMobile,
        isLargeMobile,
        isTablet,
        isSmallLaptop,
        isDesktop
    } = mediaQueryRender || {}

    const showDesktopNav = (isSmallLaptop || isDesktop)
    const showMobileNav = (isSmallMobile || isLargeMobile || isTablet)

    useEffect(() => {
        if (showDesktopNav && isOpen) {
            setOpen(false)
        }
    }, [isOpen])

    return (
        <nav
            className={cx("bg-white z-50", {
                ["absolute w-full h-screen"]: showMobileNav
            })}
        >
            <PageMargin>
                <div
                    className={cx({
                        ["flex justify-center self-center float-left items-stretch"]: showDesktopNav,
                        ["block lg:hidden flex items-center justify-between"]: showMobileNav
                    })}
                >
                    <PreRenderLink
                        href="/"
                        linkText="Alex Beciana"
                        alt="Homepage"
                        className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                    />
                    {showMobileNav  &&
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            rounded
                            color="#292F36"
                            easing="ease-in"
                        />
                    }
                </div>
                {showDesktopNav &&
                    <ul className="self-center ml-60 flex justify-end">
                        <PreRenderLink
                            alt="About page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            linkText="about"
                            href="/about"
                        />
                        <PreRenderLink
                            alt="Portfolio page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            linkText="portfolio"
                            href="/portfolio"
                        />
                        <PreRenderLink
                            alt="Blog page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            href="/blog"
                            linkText="blog"
                        />
                        <PreRenderLink
                            alt="Reviews page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            href="/reviews"
                            linkText="reviews"
                        />
                        <PreRenderLink
                            alt="Contact page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            href="/contact"
                            linkText="contact"
                        />
                    </ul>
                }
                {showMobileNav && isOpen &&
                    <ul className="ml-6 flex flex-col gap-y-8 absolute left-0 top-20 md:px-5">
                        <PreRenderLink
                            alt="About page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            linkText="about"
                            href="/about"
                        />
                        <PreRenderLink
                            alt="Portfolio page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            linkText="portfolio"
                            href="/portfolio"
                        />
                        <PreRenderLink
                            alt="Blog page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            href="/blog"
                            linkText="blog"
                        />
                        <PreRenderLink
                            alt="Reviews page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            href="/reviews"
                            linkText="reviews"
                        />
                        <PreRenderLink
                            alt="Contact page"
                            className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                            href="/contact"
                            linkText="contact"
                        />
                    </ul>
                }
            </PageMargin>
        </nav>
    )
}

export default NavBar