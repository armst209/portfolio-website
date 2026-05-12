import MobileHeroArt from "@public/assets/MobileHeroImage.webp"
import SocialLinksSection from "../../SocialLinksSection"
import PointingDownArrows from "@public/assets/icons/pointing down arrows.svg"
import ScribbledDash from "@public/assets/icons/scribbled-dash.svg"
import Image from "next/image"
import Link from "next/link"


const HeroTitleSection = () => {
    return (
        <div className="w-full xl:w-[50%]">
            <Link href="/about" className="w-full h-auto lg:hidden">
                <div className="relative z-10 w-full flex items-center justify-center ">
                    <Image src={MobileHeroArt} alt="hero image" className="w-100" quality={75} placeholder="blur" preload={true} />
                </div>
            </Link>
            <div className="flex items-center justify-center">
                <Image src={PointingDownArrows} alt="pointing down arrows" className="scribble-color-filter w-30 mt-6" />
            </div>
            <div className="pb-4 flex flex-col justify-center items-center w-full">
                <div className="flex flex-col justify-center text-center lg:mb-8">
                    <div className="pb-1">
                        <div className="flex justify-center">
                            <Image src={ScribbledDash} alt="pointing down arrows" className="top-0 right-0 left-0 scribble-color-filter w-50" />
                        </div>
                        <div className="pb-4">
                            <h1 className={`font-bold text-5xl lg:text-8xl`}>Aaron Armstrong</h1>
                        </div>
                        <h2 className={`pb-2 font-bold text-xl mr-4 w-full lg:text-3xl xl:text-4xl`}>
                            Software Engineer, Frontend & Design.
                        </h2>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-3xl ">I build <span className="font-bold orange-text-color">modern</span>, <span className="font-bold orange-text-color">accessible</span> and <span className="font-bold orange-text-color">visually pleasing</span> user experiences.</h3>
                </div>

                <div className="w-full flex flex-col lg:items-center">
                    <div className="flex flex-col items-center justify-center w-full pt-4 pb-4">
                        <SocialLinksSection />
                    </div>
                    <div className="flex justify-center">
                        <Image src={ScribbledDash} alt="pointing down arrows" className="top-0 right-0 left-0 scribble-color-filter w-50" />
                    </div>
                    <div className="flex items-center justify-center rotate-180">
                        <Image src={PointingDownArrows} alt="pointing down arrows" className="scribble-color-filter w-30 mt-6" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroTitleSection