import ContactForm from '@/components/utils/_forms/ContactForm'
import Image from 'next/image'
import Script from 'next/script'
import { CustomHead } from '@/components/utils/CustomHead'

const Contact = () => {

    return (
        <>
            <CustomHead
                title="Contact me"
                description="Reach out for collaboration. Let's create something extraordinary! Contact me today."
            />
            <Script
                id="hs-script-loader"
                src="//js.hs-scripts.com/44931574.js"
                strategy="afterInteractive"
            />
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
                        priority
                        className="hidden md:inline mx-auto"
                        alt="Alex Beciana (animated)"
                    />
                </section>
            </section>
        </>
    )
}

export default Contact