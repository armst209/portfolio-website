import ScribblePeriod from "@public/assets/icons/scribble-blob.svg"
import MobileHeroArt from "@public/assets/MobileHeroImage.webp"
import HeroSocialLinksSection from "./HeroSocialLinksSection"
import Image from "next/image"
import HeroButtons from "./HeroButtons"



const HeroTitleSection = () => {
    return (
        <div className="z-10 grid grid-cols-1 lg:w-[50%]">
            <div className="pb-8 w-full xl:pb-4">
                <div className="pb-1">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-4xl ">Hi, I&apos;m</h1>
                    <div className="flex flex-row items-end justify-start">
                        <h1 className="relative emerald-green-text-color font-bold text-6xl lg:text-8xl">Aaron</h1>
                        <div>
                            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3 lg:pb-1" alt="scribble blob period" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start pb-2">
                        <h1 className="text-3xl font-bold mr-4 w-full md:text-4xl lg:text-5xl">
                            <div className="flex flex-row w-full">
                                <div className="mr-2">A</div>
                                <div className="flex flex-row items-end justify-center">
                                    <div className="emerald-green-text-color">Frontend Developer</div>
                                    <div>
                                        <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3 lg:pb-1" width={10} alt="scribble blob period" />
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
                    <HeroButtons />
                </div>

            </div>
            <div className="w-full h-auto">
                <div className="relative z-10 w-full flex items-center justify-center pt-6 lg:hidden">
                    <Image src={MobileHeroArt} alt="hero image" className="w-100" quality={75} placeholder="blur" preload={true} />
                </div>
            </div>
        </div>
    )
}

export default HeroTitleSection