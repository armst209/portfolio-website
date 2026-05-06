import LinkedInIcon from "@public/assets/linkedin.svg"
import ResumeIcon from "@public/assets/resume.svg"
import GithubIcon from "@public/assets/github.svg"
import Image from "next/image"

const HeroSocialLinksSection = () => {
    return (
        <div className="flex flex-row justify-center items-center h-20">
            <a href="https://www.linkedin.com/in/aaronlamararmstrong/" rel="noopener noreferer" target="_blank">
                <Image src={LinkedInIcon} width={40} className="scribble-color-filter mr-4" alt="linkedin icon" />
            </a>
            <a href="https://github.com/armst209" rel="noopener noreferer" target="_blank" className="mr-4">
                <Image src={GithubIcon} width={40} className="scribble-color-filter" alt="linkedin icon" />
            </a>
            <a href="https://www.linkedin.com/in/aaronlamararmstrong/overlay/1777396879101/single-media-viewer/?profileId=ACoAAAh1eh4BVMDLJsB0gxpMglGeh1kbmv42b9I" rel="noopener noreferer" target="_blank">
                <Image src={ResumeIcon} width={40} className="scribble-color-filter mr-4" alt="linkedin icon" />
            </a>
        </div>
    )
}

export default HeroSocialLinksSection