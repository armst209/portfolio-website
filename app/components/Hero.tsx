

import Headshot from "@public/assets/headshot.webp"
import Image from "next/image"
import ContactIcon from "@public/assets/user-add.svg"
import ArtIcon from "@public/assets/paintbrush-pencil.svg"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import CircledScribble from "@public/assets/scribble-circle.svg"
import BoxScribble from "@public/assets/scribble-box.svg"

const Hero = () => {
    return (
        <section className="relative w-auto flex flex-column h-screen border-b-[.5px] border-b-[hsl(240,4,16)]">
            <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "cover" }} className="absolute inset-0" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            <div className="z-10 pl-6 pr-6 pt-6 mb-20 h-screen flex flex-col justify-center items-center w-full lg:bg-none lg:border-r-0 lg:min-w-[40%] lg:pt-0 ">

                <div className="mb-10 z-10">
                    <div className="mb-4 w-full">
                        <div className="flex flex-row">
                            <h1 className="text-4xl font-bold text-shadow-lg/30 sm:text-6xl">Hi, I'm <span className="relative emerald-green-highlight">Aaron</span>
                            </h1>

                        </div>


                        <h1 className="text-4xl font-bold text-shadow-lg/30 sm:text-6xl">A <span className="emerald-green-highlight">Frontend Developer</span></h1>
                    </div>
                    <h2 className="text-xl z-10 text-shadow-lg/30 sm:text-2xl">I specialize in creating modern, accesible and visually pleasing user interfaces and <span className="emerald-green-highlight font-bold">experiences.</span></h2>
                </div>
                <div className="relative w-full h-auto">
                    <Image src={CircledScribble} className="mt-8 scribble-color-filter absolute inset-0 rotate-200 lg:hidden" style={{ objectFit: "contain", objectPosition: "center" }} alt="circled scribble" />
                    <div className="relative z-10 w-full flex items-center justify-center lg:hidden lg:ml-8">
                        <Image src={Headshot} alt="hero image" width={200} height={100} className="border-white border-2 rounded-full" />
                    </div>
                    <div className="flex items-center justify-center w-full lg:hidden">
                        <div className="flex border w-0 border-white h-15"></div>
                    </div>

                    <div className="w-full flex flex-col justify-evenly items-center md:flex-row">
                        <div className="w-full flex flex-col justify-center items-center mb-10 z-10 md:mr-8">
                            <button className="w-60 h-13 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black sm:w-60 md:w-80 md:h-20 text-xl mb-4">
                                <Image src={ContactIcon} alt="contact icon" width={20} className="icon-emerald-filter mr-4" />
                                <p>Contact Me</p>
                            </button>
                            <button className="relative w-70 h-30 font-bold flex flex-row items-center justify-center cursor-pointer text-xl ">
                                <Image src={BoxScribble} className="scribble-color-filter absolute inset-0" style={{ objectFit: "contain", objectPosition: "center" }} alt="circled scribble" />
                                <Image src={ArtIcon} alt="contact icon" width={20} className="icon-emerald-filter mr-4" />
                                <p>View Projects</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <div className="hidden lg:flex justify-center items-center lg:w-auto lg:h-auto lg:max-w-[40%] lg:z-10">
                <div className="w-full flex justify-center items-center relative">
                    <Image src={CircledScribble} className="scribble-color-filter absolute inset-0 rotate-340 top-40 bottom-0 left-[-30] right-0 hidden lg:block" style={{ objectFit: "contain", objectPosition: "center" }} alt="circled scribble" />
                    <Image src={CircledScribble} className="scribble-color-filter absolute inset-0 rotate-210 top-40 bottom-0 left-[-30] right-0 hidden lg:flex" style={{ objectFit: "contain", objectPosition: "center" }} alt="circled scribble" />
                    <Image src={Headshot} alt="hero image" className="z-10 rounded-full w-[80%] border-2 border-white" priority fetchPriority="high" />
                </div>

            </div>

        </section >
    )
}

export default Hero