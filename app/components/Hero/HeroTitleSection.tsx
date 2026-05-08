import ScribblePeriod from "@public/assets/icons/scribble-blob.svg"
import ContactIcon from "@public/assets/icons/user-add.svg"
import CircledScribble from "@public/assets/icons/scribble-circle.svg"
import Headshot from "@public/assets/headshot.webp"
import ViewProjectsButton from "../ViewProjectsButton"
import HeroSocialLinksSection from "./HeroSocialLinksSection"
import Image from "next/image"
import Link from "next/link"


const HeroTitleSection = () => {
    return (
        <div className="z-10 grid grid-cols-1 w-full">
            <div className="pb-8 w-full xl:pb-4">
                <div className="pb-1">
                    <div className="flex flex-row items-end justify-start">
                        <h1 className="text-[1.7rem] font-bold text-shadow-lg/30 xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Hi, I&apos;m <span className="relative emerald-green-text-color">Aaron</span></h1>
                        <div>
                            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-2 w-2 lg:w-3 lg:pb-1" alt="scribble blob period" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start">
                        <h1 className="text-[1.7rem] font-bold text-shadow-lg/30 mr-4 w-full xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                            <div className="flex flex-row w-full">
                                <div className="mr-2">A</div>
                                <div className="flex flex-row items-end justify-center">
                                    <div className="emerald-green-text-color">Frontend Developer</div>
                                    <div>
                                        <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-2 w-2 lg:w-3 lg:pb-1" width={10} alt="scribble blob period" />
                                    </div>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
                <h2 className="text-md text-shadow-lg/30 sm:text-xl xl:text-2xl"> A developer with <span className="orange-text-color font-bold">6+ years</span> of experience who is passionate about building <span className="font-bold orange-text-color">modern</span>, <span className="font-bold orange-text-color">accessible</span> and <span className="font-bold orange-text-color">visually pleasing</span> user experiences. </h2>
                <HeroSocialLinksSection />
            </div>
            <div className="relative w-full h-auto">
                <Image src={CircledScribble} preload={true} className="mt-8 scribble-color-filter absolute inset-0 rotate-200 lg:hidden" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" />
                <div className="relative z-10 w-full flex items-center justify-center lg:hidden lg:ml-8">
                    <Image src={Headshot} alt="hero image" width={200} height={100} className="border-white border-2 rounded-full" quality={75} placeholder="blur" preload={true} />
                </div>
                <div className="flex items-center justify-center w-full lg:hidden">
                    <div className="flex border w-0 border-white h-15"></div>
                </div>
                <div id="hero-buttons" className="w-full flex flex-col items-center justify-center lg:flex-row  ">
                    <a href="#contact" className="z-10 lg:mr-2">
                        <div className="w-full flex flex-col justify-center items-center z-10">
                            <button className="w-60 h-20 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-xl mb-4">
                                <Image src={ContactIcon} alt="contact icon" width={20} className="icon-emerald-filter mr-4" />
                                <p>Contact Me</p>
                            </button>
                        </div>
                    </a>
                    <Link href="/projects" className="pb-4"><ViewProjectsButton /></Link>
                </div>
            </div>
        </div>
    )
}

export default HeroTitleSection