

import BackgroundSwirls from "@public/assets/swirls-bg.webp"
import Image from "next/image"
import ProjectImage from "@public/assets/project-photos/anahiem-electronics/hero.webp"
import BoxScribble from "@public/assets/icons/scribble-box.svg"

type ProjectCard = {
    title: string;
    subtitle: string;
    tools: string;
    liveURL: string;
    photoLinks: string[]

}

const ProjectCard = ({ title, subtitle, tools, liveURL, photoLinks }: ProjectCard) => {
    return (
        <div className="relative flex flex-col rounded-xl border-[.5px] border-[hsl(240,4,16)] h-auto max-w-200">
            <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} className="absolute inset-0" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            <div className="z-10">
                <Image src={ProjectImage} alt="project hero image" className="rounded-t-xl" />
            </div>
            <div className="flex flex-col justify-between z-10 border-t-[.5px] border-[hsl(240,4,16)] p-4 lg:flex-row">
                <div>
                    <div>
                        <h2 className="text-2xl font-bold">
                            {title}
                        </h2>
                        <h3>A website for a technical manufacturing corporation (Company is fictional). </h3>
                    </div>
                    <div>
                        <div>
                            Built with <span className="font-bold orange-text-color">HTML</span>, <span className="font-bold orange-text-color">CSS</span> and <span className="font-bold orange-text-color">Vanilla Javascript</span>.
                        </div>

                        <div>
                            Photos
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center lg:justify-end">
                    <a href="https://armst209.github.io/" className="w-60 h-20 pt-9 flex justify-center items-center relative" rel="noopener noreferer" target="_blank">
                        <Image src={BoxScribble} className="scribble-color-filter absolute inset-0" style={{ objectFit: "cover", objectPosition: "center" }} alt="circle scribble" />
                        <p>Live Demo</p>
                    </a>
                </div>

            </div>



        </div >
    )
}

export default ProjectCard