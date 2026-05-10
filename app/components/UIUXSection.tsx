import Image from "next/image"
import CheckIcon from "@public/assets/icons/check.svg"
import UIUXIcon from "@public/assets/icons/ui-ux.svg"
import ScribbleSmallCircle from "@public/assets/icons/scribble-small-circle.svg"
import SemiColonPeriodScribble from "./SemiColonPeriodScribble"

const UIUXSection = () => {
    return (
        <section className="pt-5 pb-6 pl-4 pr-4 w-full flex justify-center">
            <div className="w-full h-auto flex flex-col items-center justify-evenly border-[.5px] border-[hsl(240,4,16)] rounded-xl bg-background lg:w-[80%] xl:flex-row xl:h-70">
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
        </section>
    )
}

export default UIUXSection