import ContactForm from "./ContactForm"
import Image from "next/image"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import CircledScribble from "@public/assets/scribble-circle.svg"

const ContactMe = () => {
    return (
        <div className="flex flex-col min-h-150 w-full justify-center items-center p-4 pb-25">

            <div className="relative h-auto border-[.5px] border-[hsl(240,4,16)] rounded-lg w-full p-4 ">
                <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                <div className="z-10 relative flex flex-col items-center h-full lg:flex-row">
                    <div className='relative w-full flex flex-col justify-center items-center mb-4 h-100 lg:items-left lg:mr-4'>
                        <Image src={CircledScribble} className="scribble-color-filter absolute inset-0" fill style={{ objectFit: "contain" }} alt="circled scribble" />
                        <h1 className='text-xl font-bold emerald-green-highlight lg:text-4xl'>Bring your ideas to life.</h1>
                        <h1 className='text-xl font-bold emerald-green-highlight lg:text-4xl'>Let's turn your vision into reality</h1>
                        <h2 className="text-lg lg:text-2xl">Have a project in mind? Let's connect!</h2>
                    </div>
                    <div className='border-[.5px] border-[hsl(240,4,16)] rounded-lg p-6 w-full h-full bg-background'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe