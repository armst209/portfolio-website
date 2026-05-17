import LinkedInIcon from '@public/assets/icons/linkedin.svg'
import ResumeIcon from '@public/assets/icons/resume.svg'
import GithubIcon from '@public/assets/icons/github.svg'
import TwitterIcon from '@public/assets/icons/twitter.svg'
import InfoIcon from '@public/assets/icons/info.svg'
import Image from 'next/image'
import Link from 'next/link'

const SocialLinksSection = () => {
    return (
        <div className="flex flex-row items-center justify-center h-auto w-full">
            <Link href="/about">
                <Image
                    src={InfoIcon}
                    className="hidden orange-color-filter mr-5 w-6 lg:w-10 dark:flex"
                    alt="info icon"
                />
                <Image
                    src={InfoIcon}
                    className="flex black-color-filter mr-5 w-6 lg:w-10 dark:hidden coffee:hidden"
                    alt="info icon"
                />
                <Image
                    src={InfoIcon}
                    className="hidden coffee-color-filter mr-5 w-6 lg:w-10 coffee:flex dark:hidden"
                    alt="info icon"
                />
            </Link>
            <a
                href="https://www.linkedin.com/in/aaronlamararmstrong/"
                rel="noopener noreferer"
                target="_blank"
            >
                <Image
                    src={LinkedInIcon}
                    className="hidden orange-color-filter mr-4 w-6 lg:w-10 dark:flex"
                    alt="linkedin icon"
                />
                <Image
                    src={LinkedInIcon}
                    className="flex black-color-filter mr-4 w-6 lg:w-10 dark:hidden coffee:hidden"
                    alt="linkedin icon"
                />
                <Image
                    src={LinkedInIcon}
                    className="hidden coffee-color-filter mr-4 w-6 lg:w-10 coffee:flex dark:hidden"
                    alt="linkedin icon"
                />
            </a>
            <a
                href="https://github.com/armst209"
                rel="noopener noreferer"
                target="_blank"
                className="mr-4"
            >
                <Image
                    src={GithubIcon}
                    className="hidden orange-color-filter w-6 lg:w-10 dark:flex"
                    alt="github icon"
                />
                <Image
                    src={GithubIcon}
                    className="flex black-color-filter w-6 lg:w-10 dark:hidden coffee:hidden"
                    alt="github icon"
                />
                <Image
                    src={GithubIcon}
                    className="hidden coffee-color-filter w-6 lg:w-10 coffee:flex dark:hidden"
                    alt="github icon"
                />
            </a>
            <a
                href="https://drive.google.com/file/d/11kO-LIcwe-BIVgw2w7LYY6Zq_6fkGIsR/view?usp=sharing"
                rel="noopener noreferer"
                target="_blank"
                className="mr-4"
            >
                <Image
                    src={ResumeIcon}
                    className="hidden orange-color-filter w-6 lg:w-10 dark:flex"
                    alt="resume icon"
                />
                <Image
                    src={ResumeIcon}
                    className="flex black-color-filter w-6 lg:w-10 dark:hidden coffee:hidden"
                    alt="resume icon"
                />
                <Image
                    src={ResumeIcon}
                    className="hidden coffee-color-filter w-6 lg:w-10 coffee:flex dark:hidden"
                    alt="resume icon"
                />
            </a>
            <a href="https://x.com/armst209dev" rel="noopener noreferer" target="_blank">
                <Image
                    src={TwitterIcon}
                    className="hidden orange-color-filter w-6 lg:w-10 dark:flex coffee:hidden"
                    alt="twitter/x icon"
                />
                <Image
                    src={TwitterIcon}
                    className="flex black-color-filter w-6 lg:w-10 dark:hidden coffee:hidden"
                    alt="twitter/x icon"
                />
                <Image
                    src={TwitterIcon}
                    className="hidden coffee-color-filter w-6 lg:w-10 coffee:flex dark:hidden"
                    alt="twitter/x icon"
                />
            </a>
        </div>
    )
}

export default SocialLinksSection
