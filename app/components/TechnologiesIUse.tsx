import { bonaNova } from '../utils/fonts'
import SemiColonPeriodScribble from './SemiColonPeriodScribble'
import Image from 'next/image'
import TestingIcon from '@public/assets/icons/testing.svg'
import FrontendIcon from '@public/assets/icons/front-end.svg'
import StateManagementIcon from '@public/assets/icons/state-management.svg'
import BackendIcon from '@public/assets/icons/backend.svg'
import DesignIcon from '@public/assets/icons/design.svg'

const tiuContent = [{}]

const TechnologiesIUse = () => {
    return (
        <section id="tech-i-use-section" className="pr-4 pl-4">
            <div className="w-full flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center pb-6 lg:justify-center">
                    <h1
                        className={`${bonaNova.className} font-bold flex items-center text-2xl lg:text-4xl`}
                    >
                        <p>Technologies I Use</p>
                        <SemiColonPeriodScribble />
                    </h1>
                    <h2 className="text-lg lg:text-2xl">
                        I utilize a variety of tools; current and up-to-date libraries and
                        frameworks
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-row-2 gap-0 rounded-xl border bg-background-foreground-light border-light-border dark:border-dark-border lg:grid-cols-3 dark:bg-transparent">
                <div className="m-6 rounded-xl p-4 row-span-2 border border-light-border dark:border-dark-border bg-white dark:bg-transparent">
                    <div className="flex flex-row pb-2 items-center">
                        <Image
                            src={FrontendIcon}
                            width={30}
                            className="flex black-color-filter mr-4 dark:hidden"
                            alt="frontend icon"
                        />
                        <Image
                            src={FrontendIcon}
                            width={30}
                            className="hidden orange-color-filter mr-4 dark:flex"
                            alt="frontend icon"
                        />
                        <h2 className={`${bonaNova.className} font-bold text-lg`}>Frontend</h2>
                    </div>

                    <div className="pb-2">
                        <h3 className="text-black-custom font-bold dark:text-orange-custom xl:text-xl">
                            Frameworks
                        </h3>
                        <p className="wrap-normal">Next.js, Nuxt.js, Blazor </p>
                    </div>
                    <div>
                        <h3 className="text-black-custom font-bold dark:text-orange-custom xl:text-xl">
                            Libraries & Build Tools
                        </h3>
                        <p className="wrap-normal">
                            React, Vue, Tailwind CSS, Typescript, Razor, Tanstack Query & Router
                        </p>
                    </div>
                </div>

                <div className="m-6 rounded-xl p-4 border border-light-border dark:border-dark-border bg-white dark:bg-transparent">
                    <div className="flex flex-row pb-2 items-center ">
                        <Image
                            src={TestingIcon}
                            width={30}
                            className="flex black-color-filter mr-4 dark:hidden"
                            alt="testing icon"
                        />
                        <Image
                            src={TestingIcon}
                            width={30}
                            className="hidden orange-color-filter mr-4 dark:flex"
                            alt="testing icon"
                        />
                        <h2 className={`${bonaNova.className} font-bold text-lg`}>Testing</h2>
                    </div>
                    <div className="pb-2">
                        <p className="wrap-normal">Jest, Vitest, Playwright</p>
                    </div>
                </div>
                <div className="m-6 rounded-xl p-4 border border-light-border dark:border-dark-border bg-white dark:bg-transparent">
                    <div className="flex flex-row pb-2 items-center">
                        <Image
                            src={StateManagementIcon}
                            width={30}
                            className="flex black-color-filter mr-4 dark:hidden"
                            alt="state management icon"
                        />
                        <Image
                            src={StateManagementIcon}
                            width={30}
                            className="hidden orange-color-filter mr-4 dark:flex"
                            alt="state management icon"
                        />
                        <h2 className={`${bonaNova.className} font-bold text-lg`}>
                            State Management
                        </h2>
                    </div>
                    <div className="pb-2">
                        <p className="wrap-normal">Zustand, Redux/Redux Toolkit, Jotai</p>
                    </div>
                </div>
                <div className="m-6 rounded-xl p-4 border border-light-border dark:border-dark-border bg-white dark:bg-transparent">
                    <div className="flex flex-row pb-2 items-center">
                        <Image
                            src={BackendIcon}
                            width={30}
                            className="flex black-color-filter mr-4 dark:hidden"
                            alt="backend icon"
                        />
                        <Image
                            src={BackendIcon}
                            width={30}
                            className="hidden orange-color-filter mr-4 dark:flex"
                            alt="backend icon"
                        />
                        <h2 className={`${bonaNova.className} font-bold text-lg`}>Backend</h2>
                    </div>
                    <div className="pb-2">
                        <p className="wrap-normal">
                            C#, .NET, Express.js, Node.js, Supabase, Google Firebase
                        </p>
                    </div>
                </div>
                <div className="m-6 rounded-xl p-4 border border-light-border dark:border-dark-border bg-white dark:bg-transparent">
                    <div className="flex flex-row pb-2 items-center">
                        <Image
                            src={DesignIcon}
                            width={30}
                            className="flex black-color-filter mr-4 dark:hidden"
                            alt="state management icon"
                        />
                        <Image
                            src={DesignIcon}
                            width={30}
                            className="hidden orange-color-filter mr-4 dark:flex"
                            alt="state management icon"
                        />
                        <h2 className={`${bonaNova.className} font-bold text-lg`}>Design</h2>
                    </div>
                    <div className="pb-2">
                        <p className="wrap-normal">Figma, Davinci Resolve, GIMP</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologiesIUse
