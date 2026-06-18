import Image from 'next/image'
import AboutMeHeadShotDark from '@public/assets/AboutMeHeadshot_Dark.webp'
import AboutMeHeadShotLight from '@public/assets/AboutMeHeadshot_Light.webp'
import AboutMeHeadShotCoffee from '@public/assets/AboutMeHeadshot_Coffee.webp'

const AboutMeHeadShot = () => {
    return (
        <>
            <Image
                src={AboutMeHeadShotDark}
                alt="about me headshot"
                className="hidden w-50 about-image-float pb-6 lg:w-90 dark:flex coffee:hidden"
                quality={75}
                placeholder="blur"
                preload={true}
            />
            <Image
                src={AboutMeHeadShotLight}
                alt="about me headshot"
                className="flex w-50 about-image-float pb-6 lg:w-90 dark:hidden coffee:hidden"
                quality={75}
                placeholder="blur"
                preload={true}
            />
            <Image
                src={AboutMeHeadShotCoffee}
                alt="about me headshot"
                className="hidden w-50 about-image-float pb-6 lg:w-90 dark:hidden coffee:flex"
                quality={75}
                placeholder="blur"
                preload={true}
            />
        </>
    )
}

export default AboutMeHeadShot
