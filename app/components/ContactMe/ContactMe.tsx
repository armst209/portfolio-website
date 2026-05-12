import ContactForm from '../ContactForm/ContactForm'
import Image from 'next/image'
import CircledScribbleWithArrow from '@public/assets/icons/scribble-cirlcle-w-arrow.svg'
import CircledScribble from '@public/assets/icons/scribble-circle.svg'

const ContactMe = () => {
    return (
        <section id="contact" className="flex justify-center w-full p-4 pb-20">
            <div className="w-full">
                <div className="relative h-auto border border-light-border rounded-xl w-full p-4 dark:border-dark-border">
                    <div className="relative flex flex-col items-center h-full xl:flex-row">
                        <div className="z-10 relative w-full flex flex-col justify-center items-center mb-4 md:h-50 lg:items-left lg:mr-4 lg:h-120">
                            <Image
                                src={CircledScribble}
                                className="hidden orange-color-filter absolute w-full h-full inset-0 dark:xl:flex dark:md:flex"
                                style={{ objectFit: 'contain' }}
                                alt="circle scribble"
                            />
                            <Image
                                src={CircledScribble}
                                className="hidden black-color-filter absolute w-full h-full inset-0 md:flex dark:xl:hidden dark:md:hidden"
                                style={{ objectFit: 'contain' }}
                                alt="circle scribble"
                            />

                            <div className="flex flex-col text-center items-center justify-center z-20 w-full border-[.5px] border-[hsl(240,4,16)] rounded-lg p-4 h-full md:border-0 md:rounded-0 ">
                                <h1 className="text-lg z-10 font-bold lg:text-2xl xl:text-2xl">
                                    Have an idea for a project?
                                </h1>
                                <h2 className="text-emerald-green-custom font-bold text-2xl z-10 md:text-3xl xl:text-5xl dark:text-orange-custom">
                                    Let&apos;s connect!
                                </h2>
                            </div>
                        </div>
                        <div className="border border-light-border z-10 rounded-lg p-4 w-full h-full dark:border-dark-border">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
