import React from 'react'

export const PageMargin = ({ children }: any) => {

    return (
        <section className="px-5 md:px-10 py-4 mx-auto page-margin">
            {children}
        </section>
    )
}

export const TwoColumnGrid = ({ children }: any) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">

        </section>
    )
}

