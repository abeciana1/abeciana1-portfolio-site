import React from 'react'
import cx from 'classnames'

interface LayoutI {
    children: React.ReactNode;
    addClass?: string;
}

export const PageMargin = ({ children }: LayoutI) => {

    return (
        <section className="px-5 md:px-10 py-4 mx-auto page-margin">
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

export const BlogPageMargin = ({ children }: LayoutI) => {

    return (
        <section className="px-5 md:px-10 py-4 mx-auto lg:mx-20 page-margin">
            {children}
        </section>
    )
}