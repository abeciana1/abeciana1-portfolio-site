import { PageMargin } from '../../../layouts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PreRenderLink from '../../PreRenderLink'

const NavBar = () => {

    return (
        <nav
            className="bg-white z-50"
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
            </PageMargin>
        </nav>
    )
}

export default NavBar