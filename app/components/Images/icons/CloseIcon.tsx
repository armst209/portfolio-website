import Image from 'next/image'
import Close from '@public/assets/icons/close.svg'

const CloseIcon = () => {
    return (
        <>
            <Image
                src={Close}
                alt="close mobile navigation icon"
                width={40}
                height={40}
                className="hidden white-color-filter dark:flex coffee:hidden"
            />
            <Image
                src={Close}
                alt="close mobile navigation icon"
                width={40}
                height={40}
                className="flex black-color-filter dark:hidden coffee:hidden"
            />
            <Image
                src={Close}
                alt="close mobile navigation icon"
                width={40}
                height={40}
                className="hidden coffee-color-filter dark:hidden coffee:flex"
            />
        </>
    )
}

export default CloseIcon
