import React from 'react'
import useResponsiveness from '@/lib/useResponsiveness'
import cx from 'classnames'
import { ISideBar } from '@/interfaces'

const SideBarSharing = ({
    children
}: ISideBar) => {

    const mediaQueryRender = useResponsiveness()

    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    const desktop = isDesktop
    const mobile = (isMobile || isTablet)

    return (
        <aside
            className={cx("z-50", {
                ["absolute space-y-10 top-56 -left-16"]: desktop,
                ["relative py-5 flex flex-row space-x-8"]: mobile
            })}
        >
            { children }
        </aside>
    )
}

export default SideBarSharing