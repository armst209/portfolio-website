import ResumeIcon from "@public/assets/resume.svg"
import LinkedInIcon from "@public/assets/linkedin.svg"
import Link from "next/link"
import Image from "next/image"

const ButtonLinkSection = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center border-[.5px] border-[hsl(240,4,16)] p-4 lg:flex-row lg:justify-end">
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
    )
}

export default ButtonLinkSection