import React from 'react'
import useResponsiveness from '../../../lib/useResponsiveness'
import cx from 'classnames'

interface SideBarI {
    children: React.ReactNode;
}

const SideBarSharing = ({
    children
}: SideBarI) => {

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
            className={cx({
                ["fixed top-72 space-y-10 ml-10"]: desktop,
                ["relative py-5 flex flex-row space-x-8"]: mobile
            })}
        >
            { children }
        </aside>
    )
}

export default SideBarSharing