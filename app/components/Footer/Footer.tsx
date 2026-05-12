import SocialLinksSection from "../SocialLinksSection"
import ScribblePeriod from "@public/assets/icons/scribble-blob.svg"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="grid place-items-center h-75 border-t-[.5px] border-t-[hsl(240,4,16)] w-full p-4 mb-6 pr-6 ">
            <div className="w-full  flex flex-col items-center md:w-[90%]">
                <div className="w-full flex justify-center mb-2 lg:mb-0 lg:justify-start">
                    <h1 className='flex flex-row text-lg font-bold emerald-green-text-color md:text-2xl'>armst209<span className="flex items-end w-3 pb-1"><Image src={ScribblePeriod} className="scribble-color-filter  w-2" alt="scribble blob period" /></span>dev</h1>
                </div>

                <div className="flex flex-col justify-between w-full mb-4 lg:mb-0 lg:flex-row">
                    <div className="flex justify-center w-full text-wrap text-center text-sm lg:justify-start">
                        <h2>{`© ${new Date().getFullYear()} Aaron Armstrong. All rights are reserved.`}</h2>
                    </div>
                    <div className="flex justify-center text-wrap text-center text-sm">
                        <p>Website built with Next.js, Typescript and Tailwind CSS. Icons provided by <span><a href="https://www.flaticon.com/uicons" rel="noopener noreferer" target="_blank">Flaticon</a></span> & <span><a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons" rel="noopener noreferer" target="_blank">Bharat Icons</a></span></p>
                    </div>
                </div>
                <div className="flex pt-2">
                    <SocialLinksSection />
                </div>
            </div>
        </footer>
    )
}

export default Footer