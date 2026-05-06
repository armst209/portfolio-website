import ResumeIcon from "@public/assets/resume.svg"
import LinkedInIcon from "@public/assets/linkedin.svg"
import Link from "next/link"
import Image from "next/image"
import ViewProjectsButton from "../ViewProjectsButton"

const ButtonLinkSection = () => {
    return (
        <div className="flex flex-col items-center w-auto border-[.5px] border-[hsl(240,4,16)] p-4 rounded-xl lg:flex-row lg:justify-evenly">
            <a href="https://www.linkedin.com/in/aaronlamararmstrong/overlay/1777396879101/single-media-viewer/?profileId=ACoAAAh1eh4BVMDLJsB0gxpMglGeh1kbmv42b9I" rel="noopener noreferer" target="_blank">
                <button className="w-60 h-13 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black sm:w-60 md:w-80 md:h-20 text-xl mb-4">
                    <Image src={ResumeIcon} alt="resume icon" width={20} className="icon-white-filter mr-4 icon-emerald-filter" />
                    <p>Resume</p>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/aaronlamararmstrong/" rel="noopener noreferer" target="_blank">
                <button className="w-60 h-13 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black sm:w-60 md:w-80 md:h-20 text-xl mb-4">
                    <Image src={LinkedInIcon} alt="resume icon" width={20} className="icon-white-filter mr-4 icon-emerald-filter" />
                    <p>LinkedIn</p>
                </button>
            </a>
            <Link href="/projects">
                <ViewProjectsButton />
            </Link>
        </div>
    )
}

export default ButtonLinkSection