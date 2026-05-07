import ScribblePeriod from "@public/assets/icons/scribble-blob.svg"
import Image from "next/image"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <section className="p-4">

            <div className="flex flex-col w-full">
                <div className="flex flex-row items-end justify-start">
                    <h1 className="text-6xl font-bold pb-2 emerald-green-text-color">
                        Projects
                    </h1>
                    <div>
                        <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-2 w-2 lg:w-3 lg:pb-1" alt="scribble blob period" />
                    </div>
                </div>
                <h2 className="text-xl">Here you will find a collection of my completed and in-progress work</h2>
            </div>
            <div className="grid grid-cols-1 pt-10">
                <ProjectCard title="Anaheim Electronics" />
                <div></div>
                <div></div>
                {/* <Image src="" alt="image" /> */}
            </div>

        </section>

    )
}

export default Projects