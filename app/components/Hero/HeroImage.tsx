import Image from "next/image"
import HeroArt from "@public/assets/HeroImage.webp"


const HeroImage = () => {
    return (

        <div className="hidden lg:flex justify-center items-center lg:w-[50%] lg:h-auto lg:z-10">
            <div className="w-full h-full flex justify-center items-center relative">
                <Image src={HeroArt} alt="hero image" quality={75} placeholder="blur" preload={true} />
            </div>
        </div>


    )
}

export default HeroImage