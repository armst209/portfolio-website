import ContactForm from "../ContactForm/ContactForm"
import Image from "next/image"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import CircledScribble from "@public/assets/scribble-circle.svg"

const ContactMe = () => {
    return (
        <section id="contact" className="flex flex-col min-h-150 w-full justify-center items-center p-4 pt-25 pb-25">

            <div className="relative h-auto border-[.5px] border-[hsl(240,4,16)] rounded-lg w-full p-4 ">
                <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                <div className="relative flex flex-col items-center h-full lg:flex-row">
                    <div className='z-10 relative w-full flex flex-col justify-center items-center mb-4 md:h-50 lg:items-left lg:mr-4 lg:h-100'>
                        <Image src={CircledScribble} className="scribble-color-filter absolute inset-0 rotate-25 mt-25 mr-10 md:rotate-0 md:mt-0 lg:rotate-0" fill style={{ objectFit: "fill" }} alt="circle scribble" />
                        <Image src={CircledScribble} className="scribble-color-filter absolute inset-0 rotate-150 mt-28 ml-5 md:hidden" fill style={{ objectFit: "fill" }} alt="circle scribble" />
                        <div className="flex flex-col items-center justify-center z-20 border-[.5px] border-[hsl(240,4,16)] rounded-lg p-6 h-full bg-background md:bg-transparent md:border-0 md:rounded-0">
                            <h1 className='text-md z-10 font-bold emerald-green-text-color md:text-xl lg:text-2xl xl:text-3xl'>Have an idea for a project?</h1>
                            <h2 className="text-sm z-10 md:text-lg lg:text-xl xl:text-2xl">Let&apos;s connect!</h2>
                        </div>

                    </div>
                    <div className='border-[.5px] border-[hsl(240,4,16)] z-10 rounded-lg p-6 w-full h-full bg-background'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe