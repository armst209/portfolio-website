import Image from 'next/image'
import Github from '@public/assets/icons/github.svg'

const GithubIcon = ({ className = 'w-6 lg:w-10' }: { className?: string }) => {
    return (
        <>
            <Image
                src={Github}
                alt="github icon"
                className={`${className} hidden orange-color-filter dark:flex coffee:hidden`}
            />
            <Image
                src={Github}
                alt="github icon"
                className={`${className} flex black-color-filter dark:hidden coffee:hidden`}
            />
            <Image
                src={Github}
                alt="github icon"
                className={`${className} hidden coffee-color-filter dark:hidden coffee:flex`}
            />
        </>
    )
}

export default GithubIcon
