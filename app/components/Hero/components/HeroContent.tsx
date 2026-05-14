import Image from 'next/image'
import PointingDownArrows from '@public/assets/icons/pointing down arrows.svg'
import ScribbledDash from '@public/assets/icons/scribbled-dash.svg'
import HeroArtDark from '@public/assets/HeroImage.webp'
import HeroArtLight from '@public/assets/HeroImage_Light.webp'
import { bonaNova } from '@/app/utils/fonts'
import SocialLinksSection from '../../SocialLinksSection'

const HeroMobile = () => {
    return (
        <section className="flex flex-col xxl:flex-row lg:items-center lg:justify-between">
            <div id="hero-section-top">
                <div className="flex items-center justify-center">
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="flex black-color-filter dark:hidden w-30 mt-6"
                    />
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="hidden orange-color-filter w-30 mt-6 dark:flex"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={ScribbledDash}
                        alt="pointing down arrows"
                        className="hidden top-0 right-0 left-0 w-50 orange-color-filter dark:flex"
                    />
                    <Image
                        src={ScribbledDash}
                        alt="pointing down arrows"
                        className="flex top-0 right-0 left-0 black-color-filter w-50 dark:hidden"
                    />
                </div>
                <div
                    id="hero-text-mobile"
                    className="flex-cold justify-center items-center text-center"
                >
                    <h1 className={`hero-text-h1 ${bonaNova.className} font-bold`}>
                        Hi! I&apos;m Aaron Armstrong
                    </h1>
                    <h2 className="hero-text-h3">
                        I&apos;m a frontend engineer who is passionate about building{' '}
                        <span className="font-bold  text-black-custom dark:text-orange-custom">
                            modern
                        </span>
                        ,{' '}
                        <span className="font-bold text-black-custom dark:text-orange-custom">
                            accessible
                        </span>{' '}
                        and{' '}
                        <span className="font-bold text-black-custom dark:text-orange-custom">
                            visually pleasing
                        </span>{' '}
                        user experiences.
                    </h2>
                </div>
                <div className="mt-6">
                    <SocialLinksSection />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={ScribbledDash}
                        alt="pointing down arrows"
                        className="hidden top-0 right-0 left-0 w-50 orange-color-filter dark:flex"
                    />
                    <Image
                        src={ScribbledDash}
                        alt="pointing down arrows"
                        className="flex top-0 right-0 left-0 black-color-filter w-50 dark:hidden"
                    />
                </div>
                <div className="flex items-center justify-center rotate-180">
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="flex black-color-filter dark:hidden w-30 mt-6"
                    />
                    <Image
                        src={PointingDownArrows}
                        alt="pointing down arrows"
                        className="hidden orange-color-filter w-30 mt-6 dark:flex"
                    />
                </div>
            </div>
            <div id="hero-section-bottom" className="h-full flex justify-center items-center">
                <Image
                    src={HeroArtDark}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="hidden w-[70%] xl:w-[50%] dark:flex"
                />
                <Image
                    src={HeroArtLight}
                    alt="hero image"
                    quality={75}
                    placeholder="blur"
                    preload={true}
                    className="flex w-[70%] xl:w-[50%] dark:hidden"
                />
            </div>
        </section>
    )
}

export default HeroMobile
