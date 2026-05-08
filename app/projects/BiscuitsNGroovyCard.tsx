



import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import Image from "next/image"
import ProjectImage from "@public/assets/project-photos/biscuits-n-groovy/hero.webp"
import WorkInProgress from "@public/assets/icons/work-in-progress.svg"
import BiscuitsNGroovyLogo from "@public/assets/project-photos/biscuits-n-groovy/bng_logo_webp.webp"


const BiscuitsNGroovyCard = () => {
    return (
        <div className="h-auto relative flex flex-col rounded-xl border-[.5px] border-[hsl(240,4,16)] lg:h-180 max-w-200">
            <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} className="absolute inset-0" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            <div className="z-10">
                <Image src={ProjectImage} alt="project hero image" className="rounded-t-xl" />
            </div>
            <div className="z-10 flex flex-col lg:flex-row">
                <div className="flex flex-col justify-between z-10 border-t-[.5px] border-[hsl(240,4,16)] p-4 pb-4 lg:flex-row lg:mb-30">
                    <div>
                        <div className="pb-4">
                            <h2 className="text-2xl font-bold">
                                <Image src={BiscuitsNGroovyLogo} alt="Biscuits n Groovy logo" className="w-70 pb-2" />
                            </h2>
                            <h3>A modern music streaming service built with React and Vite, featuring artist collections, event
                                management, and seamless payment integration.</h3>
                        </div>
                        <ul className="list-disc list-inside">
                            <li>
                                Built with <span className="font-bold orange-text-color">React 18</span>, <span className="font-bold orange-text-color">Vite</span>, <span className="font-bold orange-text-color">Redux Toolkit</span>, <span className="font-bold orange-text-color">Sass/SCSS</span> and <span className="font-bold orange-text-color">Material UI</span>.
                            </li>
                            <li>
                                Work in progress. Currenly updating npm packages and frameworks to latest versions. Updating to <span className="font-bold orange-text-color">Next.js</span>, <span className="font-bold orange-text-color">Tailwind CSS</span> and <span className="font-bold orange-text-color">React 19</span>.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-auto flex justify-center flex-col items-center lg:flex-row">
                    <a href="https://github.com/armst209/BiscuitsNGroovy/blob/main/src/common/assets/showcase/site-capture.png" className="w-70 items-center justify-center flex flex-row m-4 bg-background border-[.5px] border-[hsl(240,4,16)] p-4 rounded-xl lg:ml-0 lg:bottom-0 lg:right-0 lg:justify-center lg:w-auto lg:hidden" rel="noopener noreferer" target="_blank">
                        <div className="flex items-center">
                            <p className="font-bold mr-2">View Site Photos</p>

                        </div>

                    </a>
                    <a href="https://armst209.github.io/" className="w-70 items-center justify-center flex flex-row m-4 bg-background border-[.5px] border-[hsl(240,4,16)] p-4 rounded-xl lg:absolute lg:ml-0 lg:bottom-0 lg:right-0 lg:justify-center lg:w-auto" rel="noopener noreferer" target="_blank">
                        <div className="flex items-center">
                            <p className="font-bold mr-2">Live Demo Not Available</p>
                            <Image src={WorkInProgress} alt="work in progress icon" className="scribble-color-filter" />
                        </div>

                    </a>
                </div>
            </div>
        </div >
    )
}

export default BiscuitsNGroovyCard