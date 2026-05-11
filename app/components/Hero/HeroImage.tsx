import Image from "next/image"
import HeroArtDark from "@public/assets/HeroImage.webp"
import HeroArtLight from "@public/assets/HeroImage_Light.webp"
import ThemeImage from "./ThemeImage"


const HeroImage = () => {
    return (

        <div className="hidden lg:flex justify-center items-center lg:w-[50%] lg:h-auto lg:z-10">
            <div className="w-full h-full flex justify-center items-center relative">
                <ThemeImage />
            </div>
        </div>


    )
}

export default HeroImage