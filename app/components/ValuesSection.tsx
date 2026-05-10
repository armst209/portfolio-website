
import Image from "next/image"
import ModernIcon from "@public/assets/icons/modern.svg"
import AccessibilityIcon from "@public/assets/icons/accessibility.svg"
import ScribbleSmallCircle from "@public/assets/icons/scribble-small-circle.svg"
import EyeIcon from "@public/assets/icons/visually-pleasing.svg"

const ValuesSection = () => {
    return (
        <section className="pt-20 pb-5 pl-4 pr-4 w-full flex justify-center">
            <div className="h-auto flex flex-col items-center justify-evenly border-[.5px] border-[hsl(240,4,16)] rounded-xl p-4 bg-background lg:w-[80%] xl:flex-row xl:h-70">
                <div className="w-full flex flex-col h-full z-10 px-4 py-6 sm:flex-row ">
                    <div className="flex justify-center items-start min-w-20 pb-4 sm:pb-0">
                        <div className="relative w-20 h-20 flex justify-center items-center">
                            <Image src={ScribbleSmallCircle} fill={true} style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                            <Image src={ModernIcon} alt="modern icon" className="w-10 icon-emerald-filter" />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-start pl-4">
                        <h1 className="pb-6 w-full text-2xl font-bold lg:text-3xl">Modern</h1>
                        <h2 className="text-md lg:text-xl">I build with modern frameworks and best practices to create fast, scalable and maintainable applications.</h2>
                    </div>
                </div>




                <div className="z-10 w-full border-b-[.5px] border-b-[hsl(240,4,16)] xl:border-b-0 xl:border-r-[.5px] xl:border-r-[hsl(240,4,16)] xl:h-full xl:w-auto"></div>



                <div className="w-full flex flex-col h-full px-4 py-6 z-10 sm:flex-row lg:justify-start">
                    <div className="flex justify-center items-start w-auto pb-4 sm:pb-0">
                        <div className="relative w-20 h-20 flex justify-center items-center">
                            <Image src={ScribbleSmallCircle} fill={true} style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                            <Image src={AccessibilityIcon} alt="accessibility icon" className="w-10 icon-emerald-filter" />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-start pl-4">
                        <h1 className="pb-6 w-full text-2xl font-bold lg:text-3xl">Accessible</h1>
                        <h2 className="text-md lg:text-xl">Accessibility is at the core of what I do. I build inclusive experiences that work for everyone.</h2>
                    </div>
                </div>
                <div className="z-10 w-full border-b-[.5px] border-b-[hsl(240,4,16)] xl:border-b-0 xl:border-r-[.5px] xl:border-r-[hsl(240,4,16)] xl:h-full xl:w-auto"></div>



                <div className="w-full flex flex-col h-full px-4 py-6 z-10 sm:flex-row">
                    <div className="flex justify-center items-start w-auto pb-4 sm:pb-0">
                        <div className="relative w-20 h-20 flex justify-center items-center">
                            <Image src={ScribbleSmallCircle} fill={true} style={{ objectFit: "cover", objectPosition: "center" }} className="absolute inset-0 scribble-color-filter" alt="small scribbled circle" />
                            <Image src={EyeIcon} alt="eye icon" className="w-10 icon-emerald-filter" />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-start pl-4">
                        <h1 className="pb-6 w-full text-2xl font-bold lg:text-3xl">Visually Pleasing</h1>
                        <h2 className="text-md lg:text-xl">Clean, thoughtful design and attention to detail create engaging experiences users love.</h2>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ValuesSection