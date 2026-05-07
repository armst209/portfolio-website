import Image from "next/image"
import SkillsIcon from "@public/assets/skills.svg"
import TechnologiesIcon from "@public/assets/technologies.svg"
import DesignIcon from "@public/assets/ui-ux.svg"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import ScribbleSmallCircle from "@public/assets/scribble-small-circle.svg"
import ScribblePeriod from "@public/assets/scribble-blob.svg"
import ViewProjectsButton from "../ViewProjectsButton"
import Link from "next/link"



const TechnicalSkills = () => {
    return (
        <section className="flex flex-col w-full justify-center p-4 mt-10  border-b-[.5px] border-b-[hsl(240,4,16)] lg:p-6">
            <div className="mb-4">
                <div className="flex flex-col mb-2 lg:flex-row">
                    <div className="flex flex-row justify-start items-end mr-3">
                        <h1 className="text-[2rem] font-bold emerald-green-text-color lg:text-4xl">Modern</h1>
                        <div>
                            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3" width={10} alt="scribble blob period" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-end mr-3">
                        <h1 className="text-[2rem] font-bold emerald-green-text-color lg:text-4xl">Accesible</h1>
                        <div>
                            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3" width={10} alt="scribble blob period" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-end">
                        <h1 className="text-[2rem] emerald-green-text-color font-bold lg:text-4xl ">Visually Pleasing</h1>
                        <div>
                            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3" width={10} alt="scribble blob period" />
                        </div>
                    </div>
                </div>
                <h2 className="grey-secondary-text-color text-md md:text-xl">Crafting user experiences that utilize modern systems & processes, meet WCAG & ADA accessiblity standards and provide the end user with a visually pleasing product</h2>
            </div>

            <div className="relative flex flex-col items-center justify-center xl:flex-row">
                <div className="z-10 w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-auto pb-30 lg:mr-2 xl:h-110">
                    <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                    <div className="z-10 relative">
                        <h2 className="text-[1.8rem] font-bold emerald-green-text-color lg:text-3xl">Skillset:</h2>
                        <h3 className="grey-secondary-text-color mb-3" >With a focus on frontend development, I can take a project from design to completion.</h3>
                        <ul className="list-inside list-disc text-2xl">
                            <li>Frontend Architecture</li>
                            <li>Fullstack Web Development</li>
                            <li>Web Accesiblity</li>
                            <li>API Intergration</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                    <div className="z-10 absolute bottom-0 right-0 mr-4 mb-4 w-20 h-20">
                        <div className="relative h-full w-full flex justify-center">
                            <Image src={ScribbleSmallCircle} fill style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                            <Image src={SkillsIcon} alt="skillset icon" className="icon-emerald-filter w-10" />
                        </div>
                    </div>
                </div>

                <div className="relative w-full border-[.5px] border-[hsl(240,4,16)] h-120 p-4 mb-2 rounded-xl lg:h-110 lg:mr-2">
                    <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                    <div className="relative z-10 ">
                        <h2 className="text-[1.8rem] font-bold emerald-green-text-color lg:text-3xl">Technologies I Use:</h2>
                        <h3 className="grey-secondary-text-color mb-3">I utilize a wide variety of tools; current and up-to-date libraries and frameworks. </h3>
                        <div className="pb-10">
                            <div className="mb-2">
                                <h4 className="font-bold orange-text-color text-lg">Frontend</h4>
                                <ul className="list-inside list-disc text-[.8rem] xs:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[.9rem]">
                                    <li>Frameworks: Next.js, Vite, Nuxt.js, Blazor</li>
                                    <li>Libraries: React, Vue, Tailwind CSS, Typescript, Razor, Tanstack Query & Router</li>
                                    <li>Testing: Jest, Vitest, Playwright</li>
                                    <li>State Management: Zustand, Redux/Redux Toolkit, Jotai</li>
                                </ul>
                            </div>
                            <div className="mb-2">
                                <h4 className="font-bold orange-text-color text-lg">Backend</h4>
                                <ul className="list-inside list-disc text-[.8rem] xs:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[.9rem]">
                                    <li>C#, .NET, Express.js, Node.js, Supabase, Google Firebase</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold orange-text-color text-lg">Design</h4>
                                <ul className="list-inside list-disc text-[.8rem] xs:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[.9rem]">
                                    <li>Figma, Davinci Resolve</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 mr-4 mb-4 w-20 h-20">
                        <div className="relative h-full w-full flex justify-center">
                            <Image src={ScribbleSmallCircle} fill style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                            <Image src={TechnologiesIcon} className="icon-emerald-filter w-10" alt="technologies icon" />
                        </div>
                    </div>
                </div>

                <div className="w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-110 pb-10 xl:h-110">
                    <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                    <div className="z-10 relative">
                        <h2 className="text-[1.8rem] emerald-green-text-color font-bold lg:text-3xl">UI/UX Design:</h2>
                        <h3 className="grey-secondary-text-color mb-3" >I am a developer first, but I have experience in design</h3>
                        <ul className="list-inside list-disc text-xl md:text-2xl">
                            <li>Wireframing & Prototyping</li>
                            <li>Typography/Font Selection</li>
                            <li>Responsive & Modern Layouts</li>
                            <li>Product Branding/Storytelling</li>
                            <li>User Testing</li>
                            <li>Color Selection/Accesiblility</li>
                        </ul>
                    </div>
                    <div className="z-10 absolute bottom-0 right-0 mr-4 mb-4 w-20 h-20">
                        <div className="relative h-full w-full flex justify-center">
                            <Image src={ScribbleSmallCircle} fill style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                            <Image src={DesignIcon} alt="design icon" className="icon-emerald-filter w-10" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex w-full justify-center pt-4 lg:justify-end">
                <Link href="/projects"><ViewProjectsButton /></Link>
            </div>

        </section >
    )
}

export default TechnicalSkills