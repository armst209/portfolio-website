import Image from 'next/image'
import ProjectImage from '@public/assets/project-photos/anahiem-electronics/hero.webp'
import LiveDemoIcon from '@public/assets/icons/live-demo.svg'
import GithubIcon from '../components/Images/GithubIcon'
import ScribbleSmallCircleImage from '../components/Images/ScribbleSmallCircle'

const AnaheimElectronicsCard = () => {
    return (
        <div className="flex flex-col border w-auto border-light-border h-auto rounded-xl dark:border-dark-border lg:h-250">
            <div className="z-10">
                <Image
                    src={ProjectImage}
                    alt="project hero image"
                    className="rounded-t-xl"
                    preload={true}
                    placeholder="blur"
                />
            </div>
            <div className="z-10 flex flex-col h-auto">
                <div className="flex flex-col justify-between z-10 border-t border-light-border p-4 dark:border-t-dark-border coffee:border-t-coffee">
                    <div>
                        <div className="pb-4">
                            <h2 className="text-3xl font-bold pb-2">Anaheim Electronics</h2>
                            <h3>
                                A responsive, mobile-first product website to showcase my HTML & CSS
                                skills. Built with only{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom coffee:text-coffee">
                                    HTML
                                </span>
                                ,{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom coffee:text-coffee">
                                    CSS
                                </span>{' '}
                                and{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom coffee:text-coffee">
                                    Vanilla Javascript
                                </span>
                                , I wanted to test my knowledge of basic frontend development with
                                out frameworks, css processors and additional libraries. (Company is
                                from a fictional universe).{' '}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center xl:flex-row">
                    <a
                        href="https://armst209.github.io/"
                        className="w-70 items-center justify-center flex flex-row m-4 border border-light-border p-4 rounded-xl dark:border-dark-border"
                        rel="noopener noreferer"
                        target="_blank"
                    >
                        <div className="flex items-center mr-2">
                            <p className="font-bold">Live Demo</p>
                        </div>
                        <div className="w-20 h-20">
                            <div className="relative h-full w-full flex justify-center">
                                <ScribbleSmallCircleImage />
                                <Image
                                    src={LiveDemoIcon}
                                    alt="skillset icon"
                                    className="hidden orange-color-filter w-10 dark:flex coffee:hidden"
                                />
                                <Image
                                    src={LiveDemoIcon}
                                    alt="skillset icon"
                                    className="flexblack-color-filter w-10 dark:hidden coffee:hidden"
                                />
                                <Image
                                    src={LiveDemoIcon}
                                    alt="skillset icon"
                                    className="hidden coffee-color-filter w-10 dark:hidden coffee:flex"
                                />
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://github.com/armst209/armst209.github.io.git"
                        className="w-70 items-center justify-center flex flex-row m-4 border border-light-border p-4 rounded-xl dark:border-dark-border"
                        rel="noopener noreferer"
                        target="_blank"
                    >
                        <div className="flex items-center mr-2">
                            <p className="font-bold">Code</p>
                        </div>
                        <div className="w-20 h-20">
                            <div className="relative h-full w-full flex justify-center">
                                <ScribbleSmallCircleImage />
                                <GithubIcon />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AnaheimElectronicsCard
