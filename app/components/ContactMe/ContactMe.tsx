import ContactForm from '../ContactForm/ContactForm'
import Image from 'next/image'
import Lightbulb from '@public/assets/Lightbulb.svg'
import { bonaNova } from '@/app/utils/fonts'

const ContactMe = () => {
    return (
        <section id="contact" className="flex justify-center w-full p-4 pb-20">
            <div className="w-full">
                <div className="w-full">
                    <div className="flex justify-center items-center w-full">
                        <Image
                            src={Lightbulb}
                            className="hidden orange-color-filter w-50 h-20 dark:flex"
                            alt="lightbulb"
                        />
                        <Image
                            src={Lightbulb}
                            className="flex black-color-filter w-50 h-20 md:flex dark:hidden"
                            alt="lightbulb"
                        />
                    </div>
                    <div className="mb-10 flex flex-col text-center items-center justify-center z-20 w-full rounded-lg p-4 h-full md:border-0 md:rounded-0 ">
                        <h1
                            className={`${bonaNova.className} text-3xl z-10 font-bold lg:text-5xl xl:text-6xl`}
                        >
                            Have an idea for a project?
                        </h1>
                        <h2
                            className={`${bonaNova.className} text-black-custom font-bold text-3xl lg:text-5xl xl:text-6xl dark:text-orange-custom`}
                        >
                            Let&apos;s connect!
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center h-auto rounded-xl w-full">
                    <div className=" border border-light-border z-10 rounded-lg p-4 w-full h-full dark:border-dark-border bg-background-foreground-light dark:bg-transparent">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
