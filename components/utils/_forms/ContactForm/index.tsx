import React, { use, useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false
    })

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            submitted: true
        })
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <section
                className=""
            >
                <section
                    className="bg-black rounded-xl w-full"
                >
                    <h2 className="text-white text-5xl pt-5 pl-10">{formData.submitted ? "Thanks for submitting!" : "say hi!"}</h2>
                    <form
                        className="pt-5 pb-10 px-10"
                        onSubmit={submitHandler}
                    >
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name*"
                                required
                                value={formData.name}
                                className="w-full py-2 px-4 rounded-3xl focus:outline-none mt-1"
                                onChange={changeHandler}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email*"
                                required
                                value={formData.email}
                                className="w-full py-2 px-4 rounded-3xl focus:outline-none mt-1"
                                onChange={changeHandler}
                            />
                        </div>
                        <br/>
                        <div>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject*"
                                required
                                value={formData.subject}
                                className="w-full py-2 px-4 rounded-3xl focus:outline-none mt-1"
                                onChange={changeHandler}
                            />
                        </div>
                        <br/>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message*"
                                required
                                value={formData.message}
                                className="w-full py-2 px-4 rounded-2xl focus:outline-none mt-1"
                                onChange={textAreaChangeHandler}
                            />
                        </div>
                        <br />
                        <input
                            type="submit"
                            className="bg-altYellow text-black text-lg py-1 px-2 rounded-xl cursor-pointer"
                        />
                    </form>
                </section>
            </section>
        </React.Fragment>
    )
}

export default ContactForm