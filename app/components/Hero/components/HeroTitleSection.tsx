import MobileHeroArt from '@public/assets/MobileHeroImage.webp'
import SocialLinksSection from '../../SocialLinksSection'
import PointingDownArrows from '@public/assets/icons/pointing down arrows.svg'
import ScribbledDash from '@public/assets/icons/scribbled-dash.svg'
import Image from 'next/image'
import Link from 'next/link'

const HeroTitleSection = () => {
    return (
        <div className="w-full xl:w-[50%] flex flex-col justify-center">
            <Link href="/about" className="w-full h-auto lg:hidden">
                <div className="relative z-10 w-full flex items-center justify-center ">
                    <Image
                        src={MobileHeroArt}
                        alt="hero image"
                        className="w-100"
                        quality={75}
                        placeholder="blur"
                        preload={true}
                    />
                </div>
            </Link>
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
            <div className="pb-4 flex flex-col justify-center items-center w-full">
                <div className="flex flex-col justify-center text-center lg:mb-8">
                    <div className="pb-1">
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
                        <div className="pb-4">
                            <h1 className={`font-bold text-5xl xl:text-7xl`}>Aaron Armstrong</h1>
                        </div>
                        <h2
                            className={`pb-2 font-bold text-xl mr-4 w-full lg:text-3xl xl:text-4xl`}
                        >
                            Software Engineer, Frontend & Design.
                        </h2>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-3xl ">
                        I build{' '}
                        <span className="font-bold  text-emerald-green-custom dark:text-orange-custom">
                            modern
                        </span>
                        ,{' '}
                        <span className="font-bold text-emerald-green-custom dark:text-orange-custom">
                            accessible
                        </span>{' '}
                        and{' '}
                        <span className="font-bold text-[#00a6f4] dark:text-orange-custom">
                            visually pleasing
                        </span>{' '}
                        user experiences.
                    </h3>
                </div>

                <div className="w-full flex flex-col lg:items-center">
                    <div className="flex flex-col items-center justify-center w-full pt-4 pb-4">
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
            </div>
        </div>
    )
}

export default HeroTitleSection
