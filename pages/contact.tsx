import React from 'react'
import { PageMargin } from '../components/layouts'


// import ContactForm from '../utils/forms/ContactForm'

const Contact = () => {

    return (
        <React.Fragment>
            <PageMargin>
                <section
                    id="contact"
                    className="pb-16 flex flex-col justify-items-center item-stretch"
                >
                    <h1
                        className="text-5xl font-reross text-altYellow leading-relaxed"
                    >
                        contact
                    </h1>
                    <section
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 content-center mt-10"
                    >
                        {/* <ContactForm /> */}
                            <div
                                className="text-center"
                            >
                                <img 
                                    src="/profile-callout-edited.png"
                                    className="hidden md:inline"
                                    alt="Alex Beciana (animated)"
                                />
                            </div>
                    </section>
                </section>
            </PageMargin>
        </React.Fragment>
    )
}

export default Contact