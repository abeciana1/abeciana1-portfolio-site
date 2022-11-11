import React from 'react'

export const PageMargin = ({ children }: any) => {

    return (
        <section className="px-5 md:px-10 py-4 mx-auto page-margin">
            {children}
        </section>
    )
}

