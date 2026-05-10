
import AnaheimElectronicsCard from "./AnaheimElectronicsCard"
import BiscuitsNGroovyCard from "./BiscuitsNGroovyCard"
import SemiColonPeriodScribble from "../components/SemiColonPeriodScribble"



const Projects = () => {

    return (
        <section className="p-4 pt-20 pb-20 w-full flex flex-col justify-center items-center">
            <div className="w-full items-center justify-center xl:w-[80%]">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h1 className="flex flex-row items-center text-6xl pb-2 font-bold text-shadow-lg/30">
                            <p>Projects</p><SemiColonPeriodScribble />
                        </h1>
                    </div>
                    <h2 className="text-md sm:text-xl xl:text-2xl">Here you will find a collection of my completed and in-progress work</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-10 place-items-center lg:grid-cols-2">
                    <AnaheimElectronicsCard />
                    <BiscuitsNGroovyCard />
                </div>
            </div>
        </section>

    )
}

export default Projects