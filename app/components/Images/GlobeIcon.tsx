import Globe from '@public/assets/icons/globe.svg'
import Image from 'next/image'

const GlobeIcon = () => {
    return (
        <>
            <Image
                src={Globe}
                alt="globe icon"
                width={20}
                className="hidden orange-color-filter mr-2 dark:flex coffee:hidden"
            />
            <Image
                src={Globe}
                alt="globe icon"
                width={20}
                className="flex black-color-filter mr-2 dark:hidden coffee:hidden"
            />
            <Image
                src={Globe}
                alt="globe icon"
                width={20}
                className="hidden coffee-color-filter mr-2 dark:hidden coffee:flex"
            />
        </>
    )
}

export default GlobeIcon
