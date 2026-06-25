import HeroArtDark from '@public/assets/HeroImage_Dark.webp'
import HeroArtLight from '@public/assets/HeroImage_Light.webp'
import HeroArtCoffee from '@public/assets/HeroImage_Coffee.webp'
import Image from 'next/image'

const HeroImage = () => {
    return (
        <>
            <Image
                src={HeroArtDark}
                alt="hero image"
                quality={75}
                placeholder="blur"
                preload={true}
                className="hidden w-[40%] xl:w-[30%] 2xl:w-[40%]  dark:flex coffee:hidden"
            />
            <Image
                src={HeroArtLight}
                alt="hero image"
                quality={75}
                placeholder="blur"
                preload={true}
                className="flex w-[40%] xl:w-[30%] 2xl:w-[40%] dark:hidden coffee:hidden"
            />
            <Image
                src={HeroArtCoffee}
                alt="hero image"
                quality={75}
                placeholder="blur"
                preload={true}
                className="hidden w-[40%] xl:w-[30%] 2xl:w-[40%] dark:hidden coffee:flex"
            />
        </>
    )
}

export default HeroImage
