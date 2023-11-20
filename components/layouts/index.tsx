import React from 'react'
import cx from 'classnames'
import { ILayout } from '@/interfaces'

export const TwoColumnGrid = ({ children, addClass = "" }: ILayout) => {
    return (
        <section className={cx("grid grid-cols-1 md:grid-cols-2 relative items-center", {
            [addClass]: addClass
        })}>
            { children }
        </section>
    )
}

export const ThreeColumnGrid = ({ children, addClass = "" }: ILayout) => {
    return (
        <section className={cx("grid grid-cols-2 md:grid-cols-3 relative items-center", {
            [addClass]: addClass
        })}>
            { children }
        </section>
    )
}

export const SkillCardGrid = ({ children, addClass = "" }: ILayout) => {
    
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