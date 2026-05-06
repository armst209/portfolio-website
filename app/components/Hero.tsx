

import Headshot from "@public/assets/headshot.webp"
import Image from "next/image"
import ContactIcon from "@public/assets/user-add.svg"
import ArtIcon from "@public/assets/paintbrush-pencil.svg"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"

const Hero = () => {
    return (
        <section className="relative content w-auto flex flex-column h-screen border-b-[.5px] border-b-[hsl(240,4,16)]">
            <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "cover" }} className="absolute inset-0" priority fetchPriority="high" />

            <div className="z-10 pl-6 pr-6 pt-6 mb-20 h-screen flex flex-col justify-center items-center w-full lg:bg-none lg:border-r-0 lg:min-w-[40%] lg:pt-0 ">
                <div className="mb-10">
                    <div className="mb-4 w-full bg-hero-left">
                        <h1 className="text-4xl font-bold sm:text-6xl">Hi, I'm <span className="text-emerald-600">Aaron</span></h1>
                        <h1 className="text-4xl font-bold sm:text-6xl">A <span className="text-emerald-600">Frontend</span> Developer</h1>
                    </div>
                    <h2 className="text-xl sm:text-2xl">I specialize in creating modern, accesible and visually pleasing user interfaces and <span className="text-emerald-600 font-bold">experiences.</span></h2>
                </div>
                <div className="w-full flex items-center justify-center lg:hidden lg:ml-8">
                    <Image src={Headshot} alt="hero image" width={200} height={100} className="border-white border-2 rounded-full" />
                </div>
                <div className="flex border border-white h-15 lg:hidden"></div>
                <div className="w-full flex flex-col justify-evenly items-center md:flex-row">
                    <div className="w-full flex flex-col justify-center items-center mb-10 md:mr-8">
                        <button className="w-60 h-13 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black sm:w-60 md:w-80 md:h-20 text-xl mb-4">
                            <Image src={ContactIcon} alt="contact icon" width={20} className="icon-emerald-filter mr-4" />
                            <p>Contact Me</p>
                        </button>
                        <button className="w-60 h-13 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black sm:w-60 md:w-80 md:h-20 text-xl ">
                            <Image src={ArtIcon} alt="contact icon" width={20} className="icon-emerald-filter mr-4" />
                            <p>View Projects</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className=" z-10 hidden lg:flex justify-center items-center lg:w-auto lg:h-auto lg:max-w-[40%]">
                <Image src={Headshot} alt="hero image" className="rounded-full w-[80%] border-2 border-white" priority fetchPriority="high" />
            </div>

        </section >
    )
}

export default Hero