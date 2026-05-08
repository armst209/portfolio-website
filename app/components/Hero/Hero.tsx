

import Headshot from "@public/assets/headshot.webp"
import Image from "next/image"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import CircledScribble from "@public/assets/icons/scribble-circle.svg"
import HeroTitleSection from "./HeroTitleSection"


const Hero = () => {
    return (
        <section className="relative flex flex-column justify-center items-center min-h-[calc(100vh-80px)] mx-auto p-6 overflow-hidden border-b-[.5px] border-b-[hsl(240,4,16)]">
            <Image src={BackgroundSwirls} alt="background image swirls" preload={true} fill={true} style={{ objectFit: "cover" }} className="absolute inset-0" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <HeroTitleSection />
            <div className="hidden lg:flex justify-center items-center lg:w-auto lg:h-auto lg:max-w-[40%] lg:z-10">
                <div className="w-full flex justify-center items-center relative">
                    <Image src={CircledScribble} preload={true} className="scribble-color-filter absolute inset-0 rotate-340 top-40 bottom-0 left-[-30] right-0 hidden lg:block" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" />
                    <Image src={CircledScribble} preload={true} className="scribble-color-filter absolute inset-0 rotate-210 top-40 bottom-0 left-[-30] right-0 hidden lg:block" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" />
                    <Image src={Headshot} alt="hero image" className="z-10 rounded-full w-[80%] border-2 border-white" preload={true} placeholder="blur" quality={75} />
                </div>
            </div>

        </section >
    )
}

export default Hero