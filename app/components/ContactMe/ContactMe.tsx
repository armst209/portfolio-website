import ContactForm from '../ContactForm/ContactForm'
import Image from 'next/image'
import CircledScribbleWithArrow from '@public/assets/icons/scribble-cirlcle-w-arrow.svg'
import CircledScribble from '@public/assets/icons/scribble-circle.svg'

const ContactMe = () => {
    return (
        <section id="contact" className="flex justify-center w-full p-4 pb-20">
            <div className="w-full">
                <div className="relative h-auto border-[.5px] border-[hsl(240,4,16)] rounded-xl w-full p-4 ">
                    <div className="relative flex flex-col items-center h-full xl:flex-row">
                        <div className="z-10 relative w-full flex flex-col justify-center items-center mb-4 md:h-50 lg:items-left lg:mr-4 lg:h-120">
                            <Image
                                src={CircledScribbleWithArrow}
                                className="hidden orange-color-filter absolute w-full h-full inset-0 xl:flex"
                                style={{ objectFit: 'cover' }}
                                alt="circle scribble"
                            />
                            <Image
                                src={CircledScribble}
                                className="hidden orange-color-filter absolute w-full h-full inset-0 sm:flex xl:hidden"
                                style={{ objectFit: 'contain' }}
                                alt="circle scribble"
                            />
                            <div className="flex flex-col text-center items-center justify-center z-20 w-full border-[.5px] border-[hsl(240,4,16)] rounded-lg p-4 h-full bg-white md:bg-transparent md:border-0 md:rounded-0 ">
                                <h1 className="text-2xl z-10 font-bold emerald-green-text-color lg:text-3xl xl:text-2xl">
                                    Have an idea for a project?
                                </h1>
                                <h2 className="text-xl z-10 md:text-lg lg:text-2xl xl:text-xl">
                                    Let&apos;s connect!
                                </h2>
                            </div>
                        </div>
                        <div className="border-[.5px] border-[hsl(240,4,16)] z-10 rounded-lg p-4 w-full h-full">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
