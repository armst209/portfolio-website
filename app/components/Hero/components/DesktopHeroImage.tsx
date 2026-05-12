import Image from "next/image"
import HeroArtDark from "@public/assets/HeroImage.webp"
import HeroArtLight from "@public/assets/HeroImage_Light.webp"
import ThemeImage from "./ThemeImage"


const HeroImage = () => {
    return (
        <div className="hidden w-[50%] justify-center items-center lg:flex lg:h-auto lg:z-10">
            <div className="w-full h-full flex justify-center items-center relative">
                <ThemeImage />
            </div>
        </div>
    )
}

export default HeroImage