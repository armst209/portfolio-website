'use client'

import ContactForm from './components/ContactForm'
import Image from 'next/image'
import Lightbulb from '@public/assets/Lightbulb.svg'

const ContactMe = () => {
    return (
        <section id="contact-me" className="flex justify-center w-full p-4 pb-20">
            <div className="w-full">
                <div className="w-full">
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={Lightbulb}
                            className="hidden orange-color-filter w-50 h-20 dark:flex coffee:hidden"
                            alt="lightbulb"
                        />
                        <Image
                            src={Lightbulb}
                            className="flex black-color-filter w-50 h-20 md:flex dark:hidden coffee:hidden"
                            alt="lightbulb"
                        />
                        <Image
                            src={Lightbulb}
                            className="hidden coffee-color-filter w-50 h-20 coffee:md:flex dark:hidden coffee:flex"
                            alt="lightbulb"
                        />
                    </div>
                    <div className="mb-10 flex flex-col text-center items-center justify-center z-20 w-full rounded-lg p-4 h-full md:border-0 md:rounded-0 ">
                        <h1 className="font-display text-3xl z-10 font-bold lg:text-5xl xl:text-6xl">
                            Have an idea for a project?
                        </h1>
                        <h2 className="font-display text-black-custom font-bold text-3xl lg:text-5xl xl:text-6xl dark:text-orange-custom coffee:text-highlight-coffee">
                            Let&apos;s connect!
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center h-auto rounded-xl w-full">
                    <div className=" border-0  rounded-lg p-4 w-full h-full dark:border dark:border-dark-border dark:bg-transparent">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
