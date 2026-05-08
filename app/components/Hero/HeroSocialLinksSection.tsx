import LinkedInIcon from "@public/assets/icons/linkedin.svg"
import ResumeIcon from "@public/assets/icons/resume.svg"
import GithubIcon from "@public/assets/icons/github.svg"
import Image from "next/image"

const HeroSocialLinksSection = () => {
    return (
        <div className="flex flex-row justify-start items-center h-20">
            <a href="https://www.linkedin.com/in/aaronlamararmstrong/" rel="noopener noreferer" target="_blank">
                <Image src={LinkedInIcon} width={40} className="scribble-color-filter mr-4" alt="linkedin icon" />
            </a>
            <a href="https://github.com/armst209" rel="noopener noreferer" target="_blank" className="mr-4">
                <Image src={GithubIcon} width={40} className="scribble-color-filter" alt="github icon" />
            </a>
            <a href="https://drive.google.com/file/d/1dtf280r8kmOTLwP96wYe2lpPMz7Eii_y/view?usp=sharing" rel="noopener noreferer" target="_blank">
                <Image src={ResumeIcon} width={40} className="scribble-color-filter" alt="resume icon" />
            </a>
        </div>
    )
}

export default HeroSocialLinksSection