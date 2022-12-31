import { useState, useEffect } from 'react'
import { PageMargin } from '../../../layouts'
import { PreRenderLink } from '../../PreRenderLink'
import cx from 'classnames'
import { Squash as Hamburger } from 'hamburger-react'
import useResponsiveness from '../../../../lib/useResponsiveness'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    
    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    const showDesktopNav = isDesktop
    const showMobileNav = (isMobile || isTablet)

    useEffect(() => {
        if (showDesktopNav && isOpen) {
            setOpen(false)
        }
    }, [isOpen])

    return (
        <nav
            className={cx("bg-white z-50", {
                ["absolute w-full h-screen"]: showMobileNav && isOpen
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
                            label="menu"
                        />
                    }
                </div>
                {showDesktopNav &&
                    <ul className="self-center ml-60 flex justify-end">
                        <li>
                            <PreRenderLink
                                alt="About page"
                                className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                                linkText="about"
                                href="/about"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Portfolio page"
                                className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                                linkText="portfolio"
                                href="/portfolio"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Blog page"
                                className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                                href="/blog"
                                linkText="blog"
                            />
                        </li>
                        {/* <li>
                            <PreRenderLink
                                alt="Reviews page"
                                className="text-3xl mr-5 font-reross cursor-pointer anim-text"
                                href="/reviews"
                                linkText="reviews"
                            />
                        </li> */}
                        <li>
                            <PreRenderLink
                                alt="Contact page"
                                className="text-3xl font-reross cursor-pointer anim-text"
                                href="/contact"
                                linkText="contact"
                            />
                        </li>
                    </ul>
                }
                {showMobileNav && isOpen &&
                    <ul className="ml-6 flex flex-col gap-y-8 absolute left-0 top-20 md:px-5">
                        <li>
                            <PreRenderLink
                                alt="About page"
                                className="text-3xl font-reross cursor-pointer anim-text"
                                linkText="about"
                                href="/about"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Portfolio page"
                                className="text-3xl font-reross cursor-pointer anim-text"
                                linkText="portfolio"
                                href="/portfolio"
                            />
                        </li>
                        <li>
                            <PreRenderLink
                                alt="Blog page"
                                className="text-3xl font-reross cursor-pointer anim-text"
                                href="/blog"
                                linkText="blog"
                            />
                        </li>
                        {/* <li>
                            <PreRenderLink
                                alt="Reviews page"
                                className="text-3xl font-reross cursor-pointer anim-text"
                                href="/reviews"
                                linkText="reviews"
                            />
                        </li> */}
                        <li>
                            <PreRenderLink
                                alt="Contact page"
                                className="text-3xl font-reross cursor-pointer anim-text"
                                href="/contact"
                                linkText="contact"
                            />
                        </li>
                    </ul>
                }
            </PageMargin>
        </nav>
    )
}

export default NavBar