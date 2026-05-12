import LinkedInIcon from "@public/assets/icons/linkedin.svg"
import ResumeIcon from "@public/assets/icons/resume.svg"
import GithubIcon from "@public/assets/icons/github.svg"
import TwitterIcon from "@public/assets/icons/twitter.svg"
import InfoIcon from "@public/assets/icons/info.svg"
import Image from "next/image"
import Link from "next/link"

const HeroSocialLinksSection = () => {
    return (
        <div className="flex flex-row items-center justify-center h-auto w-full">
            <Link href="/about">
                <Image src={InfoIcon} alt="info icon" className="scribble-color-filter mr-5 w-8 lg:w-10 xl:w-15" />
            </Link>
            <a href="https://www.linkedin.com/in/aaronlamararmstrong/" rel="noopener noreferer" target="_blank">
                <Image src={LinkedInIcon} className="scribble-color-filter mr-4 w-8 lg:w-10 xl:w-15" alt="linkedin icon" />
            </a>
            <a href="https://github.com/armst209" rel="noopener noreferer" target="_blank" className="mr-4">
                <Image src={GithubIcon} className="scribble-color-filter w-8 lg:w-10 xl:w-15" alt="github icon" />
            </a>
            <a href="https://drive.google.com/file/d/1aI5EOJ4zim8uO-H0v02KelhgfK9YM5zj/view?usp=sharing" rel="noopener noreferer" target="_blank" className="mr-4">
                <Image src={ResumeIcon} width={40} className="scribble-color-filter w-8 lg:w-10 xl:w-15" alt="resume icon" />
            </a>
            <a href="https://x.com/armst209dev" rel="noopener noreferer" target="_blank">
                <Image src={TwitterIcon} width={40} className="scribble-color-filter w-8 lg:w-10 xl:w-15" alt="twitter/x icon" />
            </a>
        </div>
    )
}

export default HeroSocialLinksSection