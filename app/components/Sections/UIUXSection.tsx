import Image from 'next/image'
import UIUXIcon from '@public/assets/icons/ui-ux.svg'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'
import SemiColonPeriodScribble from '../Utility/SemiColonPeriodScribble'
import { uiuxContent } from '@/app/utils/content'
import CheckIcon from '../Images/CheckIcon'

const UIUXSection = () => {
    return (
        <section id="ui-ux-section" className="pr-4 pl-4 w-full flex justify-center bg-transparent">
            <div className="p-6 w-full h-auto flex flex-col items-center border border-light-border rounded-xl 2xl:flex-row xl:h-70 dark:border-dark-border xl:flex-row">
                <div className="w-full h-full flex pb-6 flex-col xl:mr-4 xl:flex-row xl:w-[50%] xl:pb-0">
                    <div className="flex h-full flex-col p-4 lg:flex-row dark:bg-transparent dark:border-0">
                        <div className="flex items-center justify-center lg:justify-start">
                            <div className=" relative h-20 w-20 flex items-center justify-center mb-4 mr-4 lg:mr-0 lg:mb-0">
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={ScribbleSmallCircle}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        className="hidden absolute inset-0 orange-color-filter dark:flex coffee:hidden"
                                        alt="small scribbled circle"
                                    />
                                    <Image
                                        src={ScribbleSmallCircle}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        className="flex absolute inset-0 black-color-filter dark:hidden coffee:hidden"
                                        alt="small scribbled circle"
                                    />
                                    <Image
                                        src={ScribbleSmallCircle}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        className="hidden absolute inset-0 coffee-color-filter dark:hidden coffee:flex"
                                        alt="small scribbled circle"
                                    />
                                    <Image
                                        src={UIUXIcon}
                                        alt="ui/ux icon"
                                        className="hidden w-10 orange-color-filter dark:flex coffee:hidden"
                                    />
                                    <Image
                                        src={UIUXIcon}
                                        alt="ui/ux icon"
                                        className="flex w-10 black-color-filter dark:hidden coffee:hidden"
                                    />
                                    <Image
                                        src={UIUXIcon}
                                        alt="ui/ux icon"
                                        className="hidden w-10 coffee-color-filter dark:hidden coffee:flex"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center lg:ml-4">
                            <h1 className="font-display font-bold flex items-center text-2xl lg:text-3xl xxl:text-4xl">
                                <p>UI/UX Design</p>
                                <SemiColonPeriodScribble />
                            </h1>
                            <h2 className="text-lg lg:text-2xl">
                                I am an engineer first, but I have experience in design
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="w-full border-r border-b border-b-light-border xl:border-b-0 xl:w-auto xl:h-full dark:border-r-dark-border dark:border-b-dark-border "></div>

                <div className="h-full w-full flex flex-col text-2xl items-center xs:grid xs:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-4 p-4 rounded-xl sm:text-xl xl:text-2xl xl:mt-0">
                    {uiuxContent.map((skill, index) => {
                        return (
                            <div
                                key={`uiuxskill-${index}`}
                                className="font-bold flex flex-row items-center w-full"
                            >
                                <CheckIcon />
                                <p>{skill}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default UIUXSection
