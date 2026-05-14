import Image from 'next/image'
import CheckIcon from '@public/assets/icons/check.svg'
import UIUXIcon from '@public/assets/icons/ui-ux.svg'
import ScribbleSmallCircle from '@public/assets/icons/scribble-small-circle.svg'
import SemiColonPeriodScribble from './SemiColonPeriodScribble'
import { bonaNova } from '@/app/utils/fonts'

const UIUXSection = () => {
    return (
        <section className="pr-4 pl-4 w-full flex justify-center">
            <div className="p-6 w-full h-auto flex flex-col items-center border border-light-border rounded-xl bg-background-foreground-light 2xl:flex-row xl:h-70 dark:border-dark-border dark:bg-transparent xl:flex-row">
                <div className="w-full h-full flex pb-6 flex-col xl: mr-4 xl:flex-row dark:mr-0 xl:w-[50%] xl:pb-0">
                    <div className="flex h-full bg-white rounded-xl border border-light-border p-4 dark:bg-transparent dark:border-0">
                        <div className="flex items-center justify-center lg:justify-start">
                            <div className=" relative h-20 w-20 flex items-center justify-center mr-4 lg:mr-0">
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={ScribbleSmallCircle}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        className="hidden absolute inset-0 orange-color-filter dark:flex"
                                        alt="small scribbled circle"
                                    />
                                    <Image
                                        src={ScribbleSmallCircle}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        className="flex absolute inset-0 black-color-filter dark:hidden"
                                        alt="small scribbled circle"
                                    />
                                    <Image
                                        src={UIUXIcon}
                                        alt="ui/ux icon"
                                        className="hidden w-10 orange-color-filter dark:flex"
                                    />
                                    <Image
                                        src={UIUXIcon}
                                        alt="ui/ux icon"
                                        className="flex w-10 emerald-green-filter dark:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center lg:ml-4">
                            <h1
                                className={`${bonaNova.className} font-bold flex items-center text-2xl lg:text-4xl`}
                            >
                                <p>UI/UX Design</p>
                                <SemiColonPeriodScribble />
                            </h1>
                            <h2 className="text-lg lg:text-2xl">
                                I am a developer first, but I have experience in design
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="w-full border-b border-b-light-border xl:border-b-0 xl:w-auto xl:h-full dark:border-r dark:border-r-dark-border dark:border-b-dark-border"></div>

                <div className="w-full h-full">
                    <div className="h-full grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] p-4 rounded-xl bg-white border border-light-border dark:bg-transparent dark:border-0">
                        <div className="flex flex-row items-center justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Wireframing</p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Prototyping</p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Typography</p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Responsive Layouts</p>
                        </div>

                        <div className="flex flex-row items-center justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Product Branding </p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Storytelling </p>
                        </div>
                        <div className="flex flex-row items-center justify-start xxs:justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">User Testing</p>
                        </div>
                        <div className="flex flex-row items-center justify-start xxs:justify-center">
                            <Image
                                src={CheckIcon}
                                alt="contact icon"
                                width={20}
                                className="mr-4 emerald-green-filter"
                            />
                            <p className="text-lg xl:text-2xl">Color Selection</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UIUXSection
