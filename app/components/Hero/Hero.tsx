

import Headshot from "@public/assets/headshot.webp"
import Image from "next/image"
import CircledScribble from "@public/assets/icons/scribble-circle.svg"
import HeroTitleSection from "./HeroTitleSection"


const Hero = () => {
    return (
        <section className="relative flex flex-column justify-center items-center min-h-[calc(100vh-80px)] mx-auto p-6 overflow-hidden border-b-[.5px] border-b-[hsl(240,4,16)]">
            <HeroTitleSection />
            <div className="hidden lg:flex justify-center items-center lg:w-auto lg:h-auto lg:max-w-[40%] lg:z-10">
                <div className="w-full flex justify-center items-center relative">
                    <Image src={CircledScribble} preload={true} className="scribble-color-filter absolute inset-0 rotate-340 top-40 bottom-0 left-[-30] right-0 hidden lg:block" style={{ objectFit: "contain", objectPosition: "center" }} placeholder="blur" alt="circle scribble" blurDataURL="data:image /webp;base64,UklGRsYBAABXRUJQVlA4WAoAAAAQAAAAHgAACgAAQUxQSNIAAAAFgF3btinplG3bbdthGP+dQodUEbS+zbJt23aFEBETAGOS16lkChlTpfs6oU7NG+nAuDsrdFE0Uy8iq1mRio7WiVplgzE+jHumcJlw0WIt1IGhRFxpU13nmJwBAObJvVZn88PkopnNlzrIDilmnx+mqlBlSXNiBPI9B1Per0khv2FTPk4JedUys17Zt/q6PjONmTu9Tvd2yPOsbiTTr/r6WKQZ5ClR6wpDG4Ap5c4zGOJ4sFT2EZtoYIrpogenOwhji4Sz6AobgUdVY5S6/ycPwwFWUDggzgAAAFAGAJ0BKh8ACwA+bSySRaQioZgEAEAGxLYATplCOBvQN4B3AMxm/WbfgOsr3gf9tfRSJk4X+iehIRoAAP7ee5sDiPIXleBLH86I//z+numYq7WPQIU0N6q881ZnJtJ9cp8pn8EP/wZH3TIbnsXdA7Sj5Pd+UUf7EaJtjauREqsnyy5uCAsKQvgfBD5B/+GudJ6d/WVdulm2W/9ui3p+mSKIOct5DomH4z5GfQx9BDD4oHXW+9y3v6Kz6Wp8pn/5sWvbn5W1ThkoGG4c98AA" />
                    <Image src={CircledScribble} preload={true} className="scribble-color-filter absolute inset-0 rotate-210 top-40 bottom-0 left-[-30] right-0 hidden lg:block" style={{ objectFit: "contain", objectPosition: "center" }} alt="circle scribble" placeholder="blur" alt="circle scribble" blurDataURL="data:image /webp;base64,UklGRsYBAABXRUJQVlA4WAoAAAAQAAAAHgAACgAAQUxQSNIAAAAFgF3btinplG3bbdthGP+dQodUEbS+zbJt23aFEBETAGOS16lkChlTpfs6oU7NG+nAuDsrdFE0Uy8iq1mRio7WiVplgzE+jHumcJlw0WIt1IGhRFxpU13nmJwBAObJvVZn88PkopnNlzrIDilmnx+mqlBlSXNiBPI9B1Per0khv2FTPk4JedUys17Zt/q6PjONmTu9Tvd2yPOsbiTTr/r6WKQZ5ClR6wpDG4Ap5c4zGOJ4sFT2EZtoYIrpogenOwhji4Sz6AobgUdVY5S6/ycPwwFWUDggzgAAAFAGAJ0BKh8ACwA+bSySRaQioZgEAEAGxLYATplCOBvQN4B3AMxm/WbfgOsr3gf9tfRSJk4X+iehIRoAAP7ee5sDiPIXleBLH86I//z+numYq7WPQIU0N6q881ZnJtJ9cp8pn8EP/wZH3TIbnsXdA7Sj5Pd+UUf7EaJtjauREqsnyy5uCAsKQvgfBD5B/+GudJ6d/WVdulm2W/9ui3p+mSKIOct5DomH4z5GfQx9BDD4oHXW+9y3v6Kz6Wp8pn/5sWvbn5W1ThkoGG4c98AA" />
                    <Image src={Headshot} alt="hero image" className="z-10 rounded-full w-[80%] border-2 border-white" preload={true} placeholder="blur" quality={75} />
                </div>
            </div>
        </section >
    )
}

export default Hero;