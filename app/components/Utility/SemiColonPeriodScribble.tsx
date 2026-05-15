import Image from 'next/image'
import ScribblePeriod from '@public/assets/icons/scribble-blob.svg'

const SemiColonPeriodScribble = () => {
    return (
        <div className="flex flex-col pt-3">
            <Image
                src={ScribblePeriod}
                className="hidden orange-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:flex"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={ScribblePeriod}
                className="hidden orange-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:flex"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={ScribblePeriod}
                className="flex burgundy-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:hidden"
                width={10}
                alt="scribble blob period"
            />
            <Image
                src={ScribblePeriod}
                className="flex burgundy-color-filter ml-2 pb-1 w-1.5 lg:w-2 dark:hidden"
                width={10}
                alt="scribble blob period"
            />
        </div>
    )
}

export default SemiColonPeriodScribble
