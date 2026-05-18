import Image from 'next/image'
import Twitter from '@public/assets/icons/twitter.svg'

const TwitterIcon = () => {
    return (
        <>
            <Image
                src={Twitter}
                className="hidden orange-color-filter w-6 lg:w-10 dark:flex coffee:hidden"
                alt="twitter/x icon"
            />
            <Image
                src={Twitter}
                className="flex black-color-filter w-6 lg:w-10 dark:hidden coffee:hidden"
                alt="twitter/x icon"
            />
            <Image
                src={Twitter}
                className="hidden coffee-color-filter w-6 lg:w-10 coffee:flex dark:hidden"
                alt="twitter/x icon"
            />
        </>
    )
}

export default TwitterIcon
