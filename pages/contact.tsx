import React from 'react'
import { PageMargin } from '../components/layouts'
import ContactForm from '../components/utils/_forms/ContactForm'
import Image from 'next/image'
// import Head from 'next/head'
import Script from 'next/script'

const Contact = () => {

    return (
        <React.Fragment>
            {/* <Head> */}
                <Script
                    id="hs-script-loader"
                    src="//js.hs-scripts.com/23677902.js"
                    strategy="lazyOnload"
                />
            {/* </Head> */}
            <PageMargin>
                <section
                    id="contact"
                    className="pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <h1
                        className="text-5xl leading-relaxed"
                    >
                        Contact
                    </h1>
                    <section
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 content-center mt-10"
                    >
                        <ContactForm />
                        <Image 
                            width={450}
                            height={450}
                            src="/profile-callout-edited.webp"
                            className="hidden md:inline mx-auto"
                            alt="Alex Beciana (animated)"
                        />
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Contact