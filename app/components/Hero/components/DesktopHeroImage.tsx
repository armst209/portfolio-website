import Image from 'next/image'
import HeroArtDark from '@public/assets/HeroImage.webp'
import HeroArtLight from '@public/assets/HeroImage_Light.webp'

const DesktopHeroImage = () => {
    return (
        <div className="hidden w-[50%] justify-start items-start lg:flex lg:h-auto lg:z-10">
            <div className="w-full h-full flex justify-center items-center">
                <Image
                    src={HeroArtDark}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="hidden dark:flex"
                />
                <Image
                    src={HeroArtLight}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="flex dark:hidden"
                />
            </div>
        </div>
    )
}

export default DesktopHeroImage
