import { PageMargin } from '../../../layouts'
import { useRouter } from 'next/router'
import PreRenderLink from '../../PreRenderLink'
import { useMediaQuery } from 'react-responsive'
import cx from 'classnames'

const NavBar = () => {
    const showDesktopNav = useMediaQuery({ query: '(min-width: 850px)' })
    const showMobileNav = useMediaQuery({ query: '(max-width: 849px)' })

    return (
        <nav
            className={cx("bg-white z-50", {
                ["absolute w-full h-screen"]: showMobileNav
            })}
        >
            <PageMargin>
                <div
                    className="flex justify-center self-center float-left items-stretch"
                >
                    <PreRenderLink
                        href="/"
                        linkText="Alex Beciana"
                        alt="Homepage"
                        className="text-3xl sm:text-4xl md:text-3xl font-reross cursor-pointer anim-text"
                    />
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
                {showMobileNav &&
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