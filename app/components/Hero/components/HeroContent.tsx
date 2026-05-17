import Image from 'next/image'
import PointingDownArrows from '@public/assets/icons/pointing down arrows.svg'
import HeroArtDark from '@public/assets/HeroImage_Dark.webp'
import HeroArtLight from '@public/assets/HeroImage_Light.webp'
import HeroArtCoffee from '@public/assets/HeroImage_Coffee.webp'
import SocialLinksSection from '../../Sections/SocialLinksSection'
import ScribbledDashPartition from '../../Partitions/ScribbledDashPartition'
import CoffeeBeanIcon from '@public/assets/icons/coffee-beans.svg'

const HeroContent = () => {
    return (
        <section className="flex flex-col xxl:flex-row lg:items-center lg:justify-between">
            <div id="hero-section-headings">
                <div className="flex items-center justify-center">
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="flex black-color-filter dark:hidden w-30 mt-6 coffee:hidden"
                    />
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="hidden orange-color-filter w-30 mt-6 dark:flex coffee:hidden"
                    />

                    <Image
                        src={CoffeeBeanIcon}
                        className="hidden coffee-color-filter w-10 mt-6 dark:hidden coffee:flex"
                        alt="coffee bean icon"
                    />
                </div>
                <ScribbledDashPartition />

                <div
                    id="hero-text-mobile"
                    className="flex-cold justify-center items-center text-center"
                >
                    <h1 className="hero-text-h1 font-display font-bold mb-1 coffee:text-coffee">
                        Hi! I&apos;m Aaron Armstrong
                    </h1>
                    <h2 className="hero-text-h2">
                        I&apos;m a frontend engineer who is passionate about building{' '}
                        <span className="font-bold text-highlight-light dark:text-highlight-dark coffee:text-highlight-coffee">
                            modern
                        </span>
                        ,{' '}
                        <span className="font-bold text-highlight-light dark:text-highlight-dark coffee:text-highlight-coffee">
                            accessible
                        </span>{' '}
                        and{' '}
                        <span className="font-bold text-highlight-light dark:text-highlight-dark coffee:text-highlight-coffee">
                            visually pleasing
                        </span>{' '}
                        user experiences.
                    </h2>
                </div>
                <div className="mt-6">
                    <SocialLinksSection />
                </div>
                <ScribbledDashPartition />
                <div className="flex items-center justify-center rotate-180">
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="flex black-color-filter dark:hidden w-30 mt-6 coffee:hidden"
                    />
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="hidden orange-color-filter w-30 mt-6 dark:flex coffee:hidden"
                    />
                    <Image
                        src={CoffeeBeanIcon}
                        className="hidden coffee-color-filter w-10 mt-6 dark:hidden coffee:flex"
                        alt="coffee bean icon"
                    />
                </div>
            </div>
            <div id="hero-section-image" className="h-full flex justify-center items-center">
                <Image
                    src={HeroArtDark}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="hidden w-[70%] xl:w-[50%] dark:flex coffee:hidden"
                />
                <Image
                    src={HeroArtLight}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="flex w-[70%] xl:w-[50%] dark:hidden coffee:hidden"
                />
                <Image
                    src={HeroArtCoffee}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="hidden w-[70%] xl:w-[50%] dark:hidden coffee:flex"
                />
            </div>
        </section>
    )
}

export default HeroContent
