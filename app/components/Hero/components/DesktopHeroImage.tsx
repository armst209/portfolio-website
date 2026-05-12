import Image from "next/image"
import HeroArt from "@public/assets/HeroImage.webp"


const HeroImage = () => {
    return (
        <div className="hidden w-[50%] justify-center items-center lg:flex lg:h-auto lg:z-10">
            <div className="w-full h-full flex justify-center items-center relative">
                <Image src={HeroArt} alt="hero image" quality={75} placeholder="blur" preload={true} />
            </div>
        </div>
    )
}

export default HeroImage