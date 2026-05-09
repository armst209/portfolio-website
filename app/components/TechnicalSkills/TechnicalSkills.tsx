import Image from "next/image"
import SkillsIcon from "@public/assets/icons/skills.svg"
import TechnologiesIcon from "@public/assets/icons/resources.svg"
import UIUXIcon from "@public/assets/icons/ui-ux.svg"
import ScribbleSmallCircle from "@public/assets/icons/scribble-small-circle.svg"
import CheckIcon from "@public/assets/icons/check.svg"
import TestingIcon from "@public/assets/icons/testing.svg"
import FrontendIcon from "@public/assets/icons/front-end.svg"
import StateManagementIcon from "@public/assets/icons/state-management.svg"
import BackendIcon from "@public/assets/icons/backend.svg"
import DesignIcon from "@public/assets/icons/design.svg"
import SemiColonPeriodScribble from "../SemiColonPeriodScribble"






const TechnicalSkills = () => {
    return (
        <section className="flex flex-col w-full justify-center pl-4 pr-4 lg:pl-6 lg:pr-6">
            <div className="mb-10 rounded-xl border-[.5px] border-[hsl(240,4,16)] p-4">
                <div>
                    <div className="z-10 relative w-full flex flex-col pb-6 lg:flex-row">
                        <div className="flex items-center justify-center pb-6 lg:justify-start">
                            <div className="z-10 relative h-20 w-20 flex items-center justify-center">
                                <div className="flex justify-center items-center">
                                    <Image src={ScribbleSmallCircle} style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                                    <Image src={SkillsIcon} alt="skillset icon" className="icon-emerald-filter w-10" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center lg:ml-4 lg:justify-center">
                            <h1 className="font-bold flex items-center text-2xl lg:text-4xl"><p>Skillset</p><SemiColonPeriodScribble /></h1>
                            <h2 className="text-lg lg:text-2xl">With a focus on frontend development I can take a project from design to completion</h2>
                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap gap-2 z-10 relative">
                        <div className="w-fit border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-sm mr-4 lg:text-xl ">
                            <Image src={CheckIcon} alt="check icon" width={20} className="mr-4 icon-emerald-filter" />
                            <p>Frontend Architecture</p>
                        </div>
                        <div className="w-fit border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-sm mr-4 lg:text-xl ">
                            <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                            <p>Fullstack Web Development</p>
                        </div>
                        <div className="w-fit border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-sm mr-4 lg:text-xl ">
                            <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                            <p>Web Accessibility</p>
                        </div>
                        <div className="w-fit border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-sm mr-4 lg:text-xl ">
                            <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                            <p>API Integration</p>
                        </div>
                        <div className="w-fit border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-sm lg:text-xl ">
                            <Image src={CheckIcon} alt="check icon" width={20} className="icon-emerald-filter mr-4" />
                            <p>UI/UX Design</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <div className="border-b-[.5px] border-b-[hsl(240,4,16)] mt-10 mb-10 w-200"></div>
                </div>
                <div>
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="flex items-center justify-center pb-6 lg:justify-start">
                            <div className="z-10 relative h-20 w-20 flex items-center justify-center">
                                <div className="flex justify-center items-center">
                                    <Image src={ScribbleSmallCircle} style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                                    <Image src={TechnologiesIcon} alt="technologies icon" className="icon-emerald-filter w-10" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center lg:ml-4 lg:justify-center">
                            <h1 className="font-bold flex items-center text-2xl lg:text-4xl"><p>Technologies I Use</p><SemiColonPeriodScribble /></h1>
                            <h2 className="text-lg lg:text-2xl">I utilize a variety of tools; current and up-to-date libraries and frameworks</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 grid-row-2 gap-0 lg:grid-cols-3">
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
                                <p className="wrap-normal">Figma, Davinci Resolve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-evenly border-[.5px] border-[hsl(240,4,16)] rounded-xl bg-background xl:flex-row xl:h-70">
                <div className="w-full flex pb-6 flex-col p-4 xl:w-[33.3%] lg:flex-row">
                    <div className="flex items-center justify-center pb-6 lg:justify-start">
                        <div className="z-10 relative h-20 w-20 flex items-center justify-center mr-4 lg:mr-0">
                            <div className="flex justify-center items-center">
                                <Image src={ScribbleSmallCircle} style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                                <Image src={UIUXIcon} alt="ui/ux icon" className="icon-emerald-filter w-10" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center lg:ml-4 lg:justify-center">
                        <h1 className="font-bold flex items-center text-2xl lg:text-4xl"><p>UI/UX Design</p><SemiColonPeriodScribble /></h1>
                        <h2 className="text-lg lg:text-2xl">I am a developer first, but I have experience in design</h2>
                    </div>
                </div>
                <div className="z-10 w-full border-b-[.5px] border-b-[hsl(240,4,16)] xl:border-b-0 xl:border-r-[.5px] xl:border-r-[hsl(240,4,16)] xl:h-full xl:w-auto"></div>
                <div className="flex p-4 flex-col w-full md:flex-row xl:w-[66.6%]">
                    <div className="p-4 w-full lg:w-[50%]">
                        <div className="flex flex-row items-center justify-center"><Image src={CheckIcon} alt="contact icon" width={20} className="mr-4 icon-emerald-filter" /><p className="text-lg">Wireframing & Prototyping</p></div>
                        <div className="flex flex-row items-center justify-center"><Image src={CheckIcon} alt="contact icon" width={20} className="mr-4 icon-emerald-filter" /><p className="text-lg">Typography/Font Selection</p></div>
                        <div className="flex flex-row items-center justify-center"><Image src={CheckIcon} alt="contact icon" width={20} className="mr-4 icon-emerald-filter" /><p className="text-lg">Responsive & Modern Layouts</p></div>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-start w-full lg:w-[50%]">
                        <div className="flex flex-row items-center justify-center"><Image src={CheckIcon} alt="contact icon" width={20} className="mr-4 icon-emerald-filter" /><p className="text-lg">Product Branding/Storytelling</p></div>
                        <div className="flex flex-row items-center justify-center"><Image src={CheckIcon} alt="contact icon" width={20} className="mr-4 icon-emerald-filter" /><p className="text-lg">User Testing</p></div>
                        <div className="flex flex-row items-center justify-center"><Image src={CheckIcon} alt="contact icon" width={20} className="mr-4 icon-emerald-filter" /><p className="text-lg">Color Selection/Accessibility</p></div>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default TechnicalSkills