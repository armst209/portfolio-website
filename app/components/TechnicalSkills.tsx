import Image from "next/image"
import SkillsIcon from "@public/assets/skills.svg"
import TechnologiesIcon from "@public/assets/technologies.svg"
import DesignIcon from "@public/assets/ui-ux.svg"
import LinkArrowIcon from "@public/assets/link-arrow.svg"
import ResumeIcon from "@public/assets/resume.svg"
import LinkedInIcon from "@public/assets/linkedin.svg"
import Link from "next/link"


const TechnicalSkills = () => {
    return (
        <section className="flex flex-col min-h-200 w-full justify-center pt-25 p-4 pb-25 border-b-[.5px] border-b-[hsl(240,4,16)]">
            <div className="mb-4">
                <h1 className="text-4xl font-bold mb-2"><span className="emerald-green-highlight">Modern.</span> <span className="emerald-green-highlight">Accesible.</span> <span className="emerald-green-highlight">Visually Pleasing.</span></h1>
                <h2 className="grey-secondary-text-color text-lg">I specialize in creating user experiences that utilize modern systems & processes, meet WCAG & ADA accessiblity standards and provide the end user with a visually pleasing product. <span className="grey-secondary-text-color text-lg">Here's how I do it:</span></h2>

            </div>

            <div className="flex flex-col items-center justify-center xl:flex-row">
                <div className="bg-hero-left w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-auto pb-30 lg:mr-2 xl:h-110">
                    <h2 className="text-3xl font-bold">Skillset:</h2>
                    <h3 className="grey-secondary-text-color mb-3" >With a focus on frontend development, I can take a project from design to completion.</h3>
                    <ul className="list-inside list-disc text-2xl font-bold">
                        <li>Frontend Architecture</li>
                        <li>Fullstack Web Development</li>
                        <li>Web Accesiblity</li>
                        <li>API Intergration</li>
                        <li>UI/UX Design</li>
                    </ul>
                    <Image src={SkillsIcon} width={50} alt="skillset icon" className="icon-emerald-filter absolute bottom-0 right-0 mr-4 mb-4" />
                </div>

                <div className="bg-hero-left w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-110 pb-10 lg:mr-2">
                    <h2 className="text-3xl font-bold">Tecnologies I Use:</h2>
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
                        <Image src={TechnologiesIcon} width={50} alt="skillset icon" className="icon-emerald-filter absolute bottom-0 right-0 mr-4 mb-4" />
                    </div>
                </div>

                <div className="bg-hero-left w-full relative border-[.5px] border-[hsl(240,4,16)] p-4 mb-2 rounded-xl h-110 pb-10 xl:h-110">
                    <h2 className="text-3xl font-bold">UI/UX Design:</h2>
                    <h3 className="grey-secondary-text-color mb-3" >I am a developer first, but I have experience in craftinga and designing websites to a client's needs.</h3>
                    <ul className="list-inside list-disc text-xl lg:text-2xl font-bold">
                        <li>Wireframing & Prototyping</li>
                        <li>Typography/Font Selection</li>
                        <li>Responsive & Modern Layouts</li>
                        <li>Product Branding/Storytelling</li>
                        <li>User Testing</li>
                        <li>Color Selection/Accesiblility</li>
                    </ul>
                    <Image src={DesignIcon} width={50} alt="skillset icon" className="icon-emerald-filter absolute bottom-0 right-0 mr-4 mb-4" />
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center mt-6 lg:flex-row lg:justify-end">
                <a href="https://www.linkedin.com/in/aaronlamararmstrong/overlay/1777396879101/single-media-viewer/?profileId=ACoAAAh1eh4BVMDLJsB0gxpMglGeh1kbmv42b9I" rel="noopener noreferer" target="_blank">
                    <button className="w-50 h-10 mb-4 text-lg border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black lg:mr-2 lg:mb-0">
                        <Image src={ResumeIcon} alt="resume icon" width={20} className="icon-white-filter mr-4 icon-emerald-filter" />
                        <p>Resume</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/aaronlamararmstrong/" rel="noopener noreferer" target="_blank">
                    <button className="w-50 h-10 mb-4 text-lg border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black lg:mr-2 lg:mb-0">
                        <Image src={LinkedInIcon} alt="resume icon" width={20} className="icon-white-filter mr-4 icon-emerald-filter" />
                        <p>LinkedIn</p>
                    </button>
                </a>
                <Link href="/projects">
                    <button className="w-50 h-10 text-lg border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black">
                        <Image src={LinkedInIcon} alt="resume icon" width={20} className="icon-white-filter mr-4 icon-emerald-filter" />
                        <p>View Projects</p>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default TechnicalSkills