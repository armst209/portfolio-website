import Image from "next/image"
import SkillsIcon from "@public/assets/skills.svg"
import TechnologiesIcon from "@public/assets/technologies.svg"
import DesignIcon from "@public/assets/ui-ux.svg"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import ScribbleSmallCircle from "@public/assets/scribble-small-circle.svg"



const TechnicalSkills = () => {
    return (
        <section className="flex flex-col w-full justify-center pt-10 pb-10 pl-4 pr-4">
            <div className="mb-4">
                <h1 className="text-4xl font-bold mb-2"><span className="emerald-green-highlight">Modern.</span> <span className="emerald-green-highlight">Accesible.</span> <span className="emerald-green-highlight">Visually Pleasing.</span></h1>
                <h2 className="grey-secondary-text-color text-lg">I specialize in creating user experiences that utilize modern systems & processes, meet WCAG & ADA accessiblity standards and provide the end user with a visually pleasing product. <span className="grey-secondary-text-color text-lg">Here's how I do it:</span></h2>
            </div>

            <div className="relative flex flex-col items-center justify-center xl:flex-row">
                <div className="z-10 w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-auto pb-30 lg:mr-2 xl:h-110">
                    <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                    <div className="z-10 relative">
                        <h2 className="text-3xl font-bold emerald-green-highlight">Skillset:</h2>
                        <h3 className="grey-secondary-text-color mb-3" >With a focus on frontend development, I can take a project from design to completion.</h3>
                        <ul className="list-inside list-disc text-2xl font-bold">
                            <li>Frontend Architecture</li>
                            <li>Fullstack Web Development</li>
                            <li>Web Accesiblity</li>
                            <li>API Intergration</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                    <div className="z-10 absolute bottom-0 right-0 mr-4 mb-4 w-20 h-20">
                        <div className="relative h-full w-full flex justify-center">
                            <Image src={ScribbleSmallCircle} fill style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="scribble circle" />
                            <Image src={SkillsIcon} alt="skillset icon" className="icon-emerald-filter w-10" />
                        </div>
                    </div>
                </div>

                <div className="relative w-full border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-110 pb-10 lg:mr-2">
                    <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold emerald-green-highlight">Tecnologies I Use:</h2>
                        <h3 className="grey-secondary-text-color mb-3">I use up-to-date libraries and frameworks when applicable - minimal tools needed for the job - the job dictates the technologies needed</h3>
                        <div className="pb-10">
                            <div className="mb-2">
                                <h4 className="font-bold">Frontend</h4>
                                <ul className="list-inside list-disc text-[.8rem] xs:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[.8rem]">
                                    <li>Frameworks: Next.js, Vite, Nuxt.js, Blazor</li>
                                    <li>Libraries: React, Vue, Tailwind CSS, Typescript, Razor, Tanstack Query & Router</li>
                                    <li>Testing: Jest, Vitest, Playwright</li>
                                    <li>State Management: Zustand, Redux/Redux Toolkit, Jotai</li>
                                </ul>
                            </div>
                            <div className="mb-2">
                                <h4 className="font-bold">Backend</h4>
                                <ul className="list-inside list-disc text-[.8rem] xs:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[.8rem]">
                                    <li>C#, .NET, Express.js, Node.js, Supabase, Google Firebase</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold">Design</h4>
                                <ul className="list-inside list-disc text-[.8rem] xs:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[.8rem]">
                                    <li>Figma, Davinci Resolve</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="z-10 absolute bottom-0 right-0 mr-4 mb-4 w-20 h-20">
                        <div className="relative h-full w-full flex justify-center">
                            <Image src={ScribbleSmallCircle} fill style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="scribble circle" />
                            <Image src={TechnologiesIcon} className="icon-emerald-filter w-10" alt="technologies icon" />
                        </div>
                    </div>
                </div>

                <div className="w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-110 pb-10 xl:h-110">
                    <Image src={BackgroundSwirls} alt="background image" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0" />
                    <div className="z-10 relative">
                        <h2 className="text-3xl font-bold emerald-green-highlight">UI/UX Design:</h2>
                        <h3 className="grey-secondary-text-color mb-3" >I am a developer first, but I have experience in craftinga and designing websites to a client's needs.</h3>
                        <ul className="list-inside list-disc text-xl lg:text-2xl font-bold">
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
                            <Image src={ScribbleSmallCircle} fill style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="scribble circle" />
                            <Image src={DesignIcon} alt="design icon" className="icon-emerald-filter w-10" />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default TechnicalSkills