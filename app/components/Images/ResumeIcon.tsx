import Image from 'next/image'
import Resume from '@public/assets/icons/resume.svg'

const ResumeIcon = () => {
    return (
        <>
            <Image
                src={Resume}
                className="hidden orange-color-filter w-6 lg:w-10 dark:flex"
                alt="resume icon"
            />
            <Image
                src={Resume}
                className="flex black-color-filter w-6 lg:w-10 dark:hidden coffee:hidden"
                alt="resume icon"
            />
            <Image
                src={Resume}
                className="hidden coffee-color-filter w-6 lg:w-10 coffee:flex dark:hidden"
                alt="resume icon"
            />
        </>
    )
}

export default ResumeIcon
