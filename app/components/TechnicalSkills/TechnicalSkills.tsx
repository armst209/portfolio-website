import Image from "next/image"
import CheckIcon from "@public/assets/icons/check.svg"
import TestingIcon from "@public/assets/icons/testing.svg"
import FrontendIcon from "@public/assets/icons/front-end.svg"
import StateManagementIcon from "@public/assets/icons/state-management.svg"
import BackendIcon from "@public/assets/icons/backend.svg"
import DesignIcon from "@public/assets/icons/design.svg"
import SemiColonPeriodScribble from "../SemiColonPeriodScribble"






const TechnicalSkills = () => {
    return (
        <section className=" flex justify-center w-full items-center pt-5 pb-6">
            <div className="flex flex-col w-full justify-center pl-4 pr-4 lg:w-[80%]">
                <div>
                    <div className="flex flex-col 2xl:flex-row">
                        <div id="tech-skills-content">
                            <div id="skillset-section" className="flex flex-col items-center w-full md:pb-10">

                                <div className="z-10 w-full flex flex-col lg:flex-row">
                                    <div className="flex flex-col justify-center lg:justify-center">
                                        <h1 className="font-bold flex items-center text-2xl lg:text-4xl"><p>Skillset</p><SemiColonPeriodScribble /></h1>
                                        <h2 className="text-lg lg:text-2xl">With a focus on frontend development I can take a project from design to completion</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 z-10 border-[.5px] border-[hsl(240,4,16)] m-6 rounded-xl p-4 w-full">
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <Image src={CheckIcon} alt="check icon" width={20} className="mr-4 icon-emerald-filter" />
                                        <p>Frontend Architecture</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                                        <p>Fullstack Web Development</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                                        <p>Web Accessibility</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm mr-4 lg:text-xl ">
                                        <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                                        <p>API Integration</p>
                                    </div>
                                    <div className="w-auto border-[.5px] border-[hsl(240,4,16)] rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer text-sm lg:text-xl ">
                                        <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                                        <p>UI/UX Design</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tech-i-use-section">
                                <div className="w-full flex flex-col lg:flex-row">
                                    <div className="flex flex-col justify-center pb-6 lg:justify-center">
                                        <h1 className="font-bold flex items-center text-2xl lg:text-4xl"><p>Technologies I Use</p><SemiColonPeriodScribble /></h1>
                                        <h2 className="text-lg lg:text-2xl">I utilize a variety of tools; current and up-to-date libraries and frameworks</h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 grid-row-2 gap-0 border-[.5px] border-[hsl(240,4,16)] rounded-xl lg:grid-cols-3">
                                    <div className="border-[.5px] border-[hsl(240,4,16)] m-6 rounded-xl p-4 row-span-2">
                                        <div className="flex flex-row pb-2">
                                            <Image src={FrontendIcon} width={30} className="icon-emerald-filter mr-4" alt="frontend icon" />
                                            <h2 className="font-bold text-lg">Frontend</h2>
                                        </div>

                                        <div className="pb-2">
                                            <h3 className="emerald-green-text-color font-bold">Frameworks</h3>
                                            <p className="wrap-normal">Next.js, Nuxt.js, Blazor </p>
                                        </div>
                                        <div>
                                            <h3 className="emerald-green-text-color font-bold">Libraries & Build Tools</h3>
                                            <p className="wrap-normal">React, Vue, Tailwind CSS, Typescript, Razor, Tanstack Query & Router</p>
                                        </div>
                                    </div>

                                    <div className="border-[.5px] border-[hsl(240,4,16)] m-6 rounded-xl p-4">
                                        <div className="flex flex-row pb-2">
                                            <Image src={TestingIcon} width={30} className="icon-emerald-filter mr-4" alt="testing icon" />
                                            <h2 className="font-bold text-lg">Testing</h2>
                                        </div>
                                        <div className="pb-2">
                                            <p className="wrap-normal">Jest, Vitest, Playwright</p>
                                        </div>
                                    </div>
                                    <div className="border-[.5px] border-[hsl(240,4,16)] m-6 rounded-xl p-4">
                                        <div className="flex flex-row pb-2">
                                            <Image src={StateManagementIcon} width={30} className="icon-emerald-filter mr-4" alt="state management icon" />
                                            <h2 className="font-bold text-lg">State Management</h2>
                                        </div>
                                        <div className="pb-2">
                                            <p className="wrap-normal">Zustand, Redux/Redux Toolkit, Jotai</p>
                                        </div>
                                    </div>
                                    <div className="border-[.5px] border-[hsl(240,4,16)] m-6 rounded-xl p-4">
                                        <div className="flex flex-row pb-2">
                                            <Image src={BackendIcon} width={30} className="icon-emerald-filter mr-4" alt="backend icon" />
                                            <h2 className="font-bold text-lg">Backend</h2>
                                        </div>
                                        <div className="pb-2">
                                            <p className="wrap-normal">C#, .NET, Express.js, Node.js, Supabase, Google Firebase</p>
                                        </div>
                                    </div>
                                    <div className="border-[.5px] border-[hsl(240,4,16)] m-6 rounded-xl p-4">
                                        <div className="flex flex-row pb-2">
                                            <Image src={DesignIcon} width={30} className="icon-emerald-filter mr-4" alt="design icon" />
                                            <h2 className="font-bold text-lg">Design</h2>
                                        </div>
                                        <div className="pb-2">
                                            <p className="wrap-normal">Figma, Davinci Resolve, GIMP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section >
    )
}

export default TechnicalSkills