import React from 'react'
import cx from 'classnames'
import useResponsiveness from '../../lib/useResponsiveness'

interface LayoutI {
    children: React.ReactNode;
    addClass?: string;
}


export const PageMargin = ({ children }: LayoutI) => {
    const mediaQueryRender = useResponsiveness()
    
    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}
    
    const showDesktop = isDesktop
    const showMobile = (isMobile || isTablet)

    return (
        <section
        //     className={cx('py-4 mx-auto', {
        //     ['px-10 page-margin']: showDesktop,
        //     ['px-5']: showMobile
        // })}
        >
            {children}
        </section>
    )
}

export const TwoColumnGrid = ({ children, addClass = "" }: LayoutI) => {
    return (
        <section className={cx("grid grid-cols-1 md:grid-cols-2 relative items-center", {
            [addClass]: addClass
        })}>
            { children }
        </section>
    )
}

export const SkillCardGrid = ({ children, addClass = "" }: LayoutI) => {
    
    return (
        <section
            className={cx("grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10", {
                [addClass]: addClass
            })}
        >
            { children }
        </section>
    )
}

export const BlogPageMargin = ({ children }: LayoutI) => {
    const mediaQueryRender = useResponsiveness()
    
    const {
        isMobile,
        isTablet,
        isDesktop,
    } = mediaQueryRender || {}

    return (
        <section className={cx("py-4 mx-auto page-margin", {
            ['px-5']: isMobile,
            ['px-10']: isTablet,
            ['px-20']: isDesktop
        })}>
            {children}
        </section>
    )
}