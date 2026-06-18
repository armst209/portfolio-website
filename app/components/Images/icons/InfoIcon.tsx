import Image from 'next/image'

import Info from '@public/assets/icons/info.svg'

const InfoIcon = () => {
    return (
        <>
            <Image
                src={Info}
                className="hidden orange-color-filter mr-5 w-6 lg:w-10 dark:flex"
                alt="info icon"
            />
            <Image
                src={Info}
                className="flex black-color-filter mr-5 w-6 lg:w-10 dark:hidden coffee:hidden"
                alt="info icon"
            />
            <Image
                src={Info}
                className="hidden coffee-color-filter mr-5 w-6 lg:w-10 coffee:flex dark:hidden"
                alt="info icon"
            />
        </>
    )
}

export default InfoIcon
