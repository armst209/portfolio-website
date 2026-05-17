import Image from 'next/image'
import ScribblePeriod from '@public/assets/icons/scribble-blob.svg'
import CoffeeBeanIcon from '@public/assets/icons/coffee-beans.svg'

const SemiColonPeriodScribble = () => {
    return (
        <div className="flex flex-col pt-3">
            <Image
                src={ScribblePeriod}
                className="hidden orange-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:flex coffee:hidden"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={ScribblePeriod}
                className="hidden orange-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:flex coffee:hidden"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={ScribblePeriod}
                className="flex black-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:hidden coffee:hidden"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={ScribblePeriod}
                className="flex black-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:hidden coffee:hidden"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={CoffeeBeanIcon}
                className="hidden coffee-color-filter ml-1 pb-1 w-3 lg:w-5 dark:hidden coffee:flex"
                width={1}
                alt="coffee bean icon"
            />
        </div>
    )
}

export default SemiColonPeriodScribble
