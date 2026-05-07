

import Headshot from "@public/assets/headshot.webp"
import Image from "next/image"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import CircledScribble from "@public/assets/scribble-circle.svg"
import HeroTopSection from "./HeroTopSection"


const Hero = () => {
    return (
        <section className="relative flex flex-column justify-center items-center min-h-[calc(100vh-80px)] mx-auto p-6 overflow-hidden border-b-[.5px] border-b-[hsl(240,4,16)]">
            <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} className="absolute inset-0" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            <HeroTopSection />
            <div className="hidden lg:flex justify-center items-center lg:w-auto lg:h-auto lg:max-w-[40%] lg:z-10">
                <div className="w-full flex justify-center items-center relative">
                    <Image src={CircledScribble} className="scribble-color-filter absolute inset-0 rotate-340 top-40 bottom-0 left-[-30] right-0 hidden lg:block" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" />
                    <Image src={CircledScribble} className="scribble-color-filter absolute inset-0 rotate-210 top-40 bottom-0 left-[-30] right-0 hidden lg:flex" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" />
                    <Image src={Headshot} alt="hero image" className="z-10 rounded-full w-[80%] border-2 border-white" priority fetchPriority="high" />
                </div>
            </div>

        </section >
    )
}

export default Hero