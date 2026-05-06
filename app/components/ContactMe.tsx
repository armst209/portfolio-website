import ContactForm from "./ContactForm"
import Image from "next/image"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"

const ContactMe = () => {
    return (
        <div className="flex flex-col min-h-150 w-full justify-center items-center pt-25 p-4 pb-25">
            <div className="relative h-auto border-[.5px] border-[hsl(240,4,16)] rounded-lg w-full p-4 ">
                <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "inherit" }} className="absolute inset-0" />
                <div className="z-10 relative flex flex-col items-center lg:flex-row">
                    <div className='w-full flex flex-col justify-center items-center mb-4 lg:items-left'>
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