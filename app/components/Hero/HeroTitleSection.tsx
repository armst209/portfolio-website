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
                        <h1 className="text-[1.7rem] font-bold xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Hi, I&apos;m <span className="relative emerald-green-text-color">Aaron</span></h1>
                        <div>
                            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-2 w-2 lg:w-3 lg:pb-1" alt="scribble blob period" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start">
                        <h1 className="text-[1.7rem] font-bold mr-4 w-full xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
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
                <h2 className="text-md sm:text-xl xl:text-2xl"> A developer with <span className="orange-text-color font-bold">6+ years</span> of experience who is passionate about building <span className="font-bold orange-text-color">modern</span>, <span className="font-bold orange-text-color">accessible</span> and <span className="font-bold orange-text-color">visually pleasing</span> user experiences. </h2>
                <div className="pt-6 pb-4">
                    <HeroSocialLinksSection />
                </div>

                <div className="flex flex-col items-center justify-start md:flex-row">
                    <div id="hero-buttons" className="flex flex-col items-center pt-4 w-full md:w-auto md:flex-row">
                        <Link href="/projects" className="md:mr-6">
                            <ViewProjectsButton />
                        </Link>
                        <a href="#contact" className="z-10">
                            <div className="w-full flex flex-col justify-center items-center z-10">
                                <button className="h-15 w-55 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-lg">
                                    <Image src={ContactIcon} alt="contact icon" width={20} className="icon-white-filter mr-4" />
                                    <p>Contact Me</p>
                                </button>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <div className="relative w-full h-auto">
                <Image src={CircledScribble} preload={true} className="mt-8 scribble-color-filter absolute inset-0 rotate-200 sm:mt-15 lg:hidden" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" />
                <div className="relative z-10 w-full flex items-center justify-center pt-6 lg:hidden x">
                    <Image src={Headshot} alt="hero image" className="border-white border-2 rounded-full w-40 xs:w-60 sm:w-[20rem]" quality={75} placeholder="blur" preload={true} />
                </div>

            </div>
        </div>
    )
}

export default HeroTitleSection