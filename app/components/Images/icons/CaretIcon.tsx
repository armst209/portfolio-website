import Image from 'next/image'
import Caret from '@public/assets/icons/caret-down.svg'
const CaretIcon = () => {
    return (
        <>
            <Image
                src={Caret}
                alt="dropdown caret icon"
                width={15}
                className={`flex black-color-filter dark:hidden coffee:hidden`}
            />
            <Image
                src={Caret}
                alt="dropdown caret icon"
                width={15}
                className="hidden white-color-filter coffee:hidden dark:flex"
            />
            <Image
                src={Caret}
                alt="dropdown caret icon"
                width={15}
                className="hidden dark-coffee-color-filter coffee:flex dark:hidden"
            />
        </>
    )
}

export default CaretIcon
