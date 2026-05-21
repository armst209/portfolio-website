import LinkedInIcon from '../Images/LinkedInIcon'
import ResumeIcon from '../Images/ResumeIcon'
import GithubIcon from '../Images/GithubIcon'
import Link from 'next/link'
import InfoIcon from '../Images/InfoIcon'
import TwitterIcon from '../Images/TwitterIcon'
import ProjectsIcon from '../Images/ProjectsIcon'

const SocialLinksSection = () => {
    return (
        <div className="flex flex-row items-center justify-center h-auto w-full">
            <Link href="/about">
                <InfoIcon />
            </Link>
            <Link href="/projects">
                <ProjectsIcon />
            </Link>
            <a
                href="https://www.linkedin.com/in/aaronlamararmstrong/"
                rel="noopener noreferer"
                target="_blank"
            >
                <LinkedInIcon />
            </a>
            <a
                href="https://github.com/armst209"
                rel="noopener noreferer"
                target="_blank"
                className="mr-4"
            >
                <GithubIcon />
            </a>
            <a
                href="https://drive.google.com/file/d/11eziH1IuAzJc285-Dao6mT8Z_RAqc3JZ/view?usp=sharing"
                rel="noopener noreferer"
                target="_blank"
                className="mr-4"
            >
                <ResumeIcon />
            </a>
            <a href="https://x.com/armst209dev" rel="noopener noreferer" target="_blank">
                <TwitterIcon />
            </a>
        </div>
    )
}

export default SocialLinksSection
