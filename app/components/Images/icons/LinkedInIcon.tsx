import Image from 'next/image'
import LinkedIn from '@public/assets/icons/linkedin.svg'

const LinkedInIcon = () => {
    return (
        <>
            <Image
                src={LinkedIn}
                className="hidden orange-color-filter mr-4 w-6 lg:w-10 dark:flex"
                alt="linkedin icon"
            />
            <Image
                src={LinkedIn}
                className="flex black-color-filter mr-4 w-6 lg:w-10 dark:hidden coffee:hidden"
                alt="linkedin icon"
            />
            <Image
                src={LinkedIn}
                className="hidden coffee-color-filter mr-4 w-6 lg:w-10 coffee:flex dark:hidden"
                alt="linkedin icon"
            />
        </>
    )
}

export default LinkedInIcon
