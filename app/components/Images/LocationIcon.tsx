import Image from 'next/image'
import Location from '@public/assets/icons/marker.svg'

const LocationIcon = () => {
    return (
        <>
            <Image
                src={Location}
                alt="location icon"
                width={20}
                className="hidden orange-color-filter mr-2 dark:flex coffee:hidden"
            />
            <Image
                src={Location}
                alt="location icon"
                width={20}
                className="flex black-color-filter mr-2 dark:hidden coffee:hidden"
            />
            <Image
                src={Location}
                alt="location icon"
                width={20}
                className="hidden coffee-color-filter mr-2 dark:hidden coffee:flex"
            />
        </>
    )
}

export default LocationIcon
