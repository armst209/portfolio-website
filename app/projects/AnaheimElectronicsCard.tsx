import Image from 'next/image'
import ProjectImage from '@public/assets/project-photos/anahiem-electronics/hero.webp'
import LiveDemoIcon from '@public/assets/icons/live-demo.svg'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'

const AnaheimElectronicsCard = () => {
    return (
        <div className="flex flex-col rounded-xl border border-light-border h-auto max-w-200 lg:h-180 dark:border-dark-border">
            <div className="z-10">
                <Image
                    src={ProjectImage}
                    alt="project hero image"
                    className="rounded-t-xl"
                    preload={true}
                    height={450}
                    placeholder="blur"
                />
            </div>
            <div className="relative z-10 flex flex-col h-90 lg:flex-row">
                <div className="flex flex-col justify-between z-10 border-t-[.5px] border-[hsl(240,4,16)] p-4 pb-4 lg:flex-row lg:mb-30">
                    <div>
                        <div className="pb-4">
                            <h2 className="text-3xl font-bold pb-2">Anaheim Electronics</h2>
                            <h3>
                                A website for a technical manufacturing corporation (Company is from
                                a fictional universe).{' '}
                            </h3>
                        </div>
                        <ul className="list-disc list-inside">
                            <li>
                                Built with{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    HTML
                                </span>
                                ,{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    CSS
                                </span>{' '}
                                and{' '}
                                <span className="font-bold text-black-custom dark:text-orange-custom">
                                    Vanilla Javascript
                                </span>
                                .
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-auto flex justify-center">
                    <a
                        href="https://armst209.github.io/"
                        className="w-70 items-center justify-center flex flex-row m-4 border border-light-border p-4 rounded-xl lg:absolute lg:ml-0 lg:bottom-0 lg:right-0 lg:justify-center lg:w-auto dark:border-dark-border"
                        rel="noopener noreferer"
                        target="_blank"
                    >
                        <div className="flex items-center mr-2">
                            <p className="font-bold">Live Demo</p>
                        </div>
                        <div className="w-20 h-20">
                            <div className="relative h-full w-full flex justify-center">
                                <Image
                                    src={ScribbleSmallCircle}
                                    fill={true}
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    className="hidden absolute inset-0 orange-color-filter dark:flex coffee:hidden"
                                    alt="small scribbled circle"
                                />
                                <Image
                                    src={ScribbleSmallCircle}
                                    fill={true}
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    className="flex absolute inset-0 black-color-filter dark:hidden coffee:hidden"
                                    alt="small scribbled circle"
                                />
                                <Image
                                    src={ScribbleSmallCircle}
                                    fill={true}
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    className="hidden absolute inset-0 coffee-color-filter dark:hidden coffee:flex"
                                    alt="small scribbled circle"
                                />
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
                </div>
            </div>
        </div>
    )
}

export default AnaheimElectronicsCard
