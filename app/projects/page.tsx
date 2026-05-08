import ScribblePeriod from "@public/assets/icons/scribble-blob.svg"
import Image from "next/image"
import AnaheimElectronicsCard from "./AnaheimElectronicsCard"
import BiscuitsNGroovyCard from "./BiscuitsNGroovyCard"



const Tools = () => {
    return (<li>

    </li>)
}

const Projects = () => {


    const projectInfo = [
        {
            title: "Anaheim Electronics",
            subtitle: "A website for a technical manufacturing corporation (Company is from a fictional universe).",
            tools: Tools,
            liveURL: "https://armst209.github.io/"
        }
    ]
    return (
        <section className="p-4">

            <div className="flex flex-col w-full">
                <div className="flex flex-row items-end justify-start">
                    <h1 className="text-[1.7rem] font-bold text-shadow-lg/30 pb-2 emerald-green-text-color xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Projects
                    </h1>
                    <div>
                        <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-2 w-2 lg:w-3 lg:pb-1" alt="scribble blob period" />
                    </div>
                </div>
                <h2 className="text-md sm:text-xl xl:text-2xl">Here you will find a collection of my completed and in-progress work</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-10 place-items-center lg:grid-cols-2">
                <AnaheimElectronicsCard />
                <BiscuitsNGroovyCard />
            </div>
        </section>

    )
}

export default Projects