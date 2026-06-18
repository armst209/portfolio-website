import Image from 'next/image'
import Check from '@public/assets/icons/check.svg'

const CheckIcon = ({ className = 'mr-4' }: { className?: string }) => {
    return (
        <div>
            <Image
                src={Check}
                alt="check icon"
                width={20}
                className={`${className} hidden emerald-green-filter dark:flex coffee:hidden `}
            />
            <Image
                src={Check}
                alt="check icon"
                width={20}
                className={`${className} flex black-color-filter dark:hidden coffee:hidden`}
            />
            <Image
                src={Check}
                alt="check icon"
                width={20}
                className={`${className} hidden coffee-color-filter dark:hidden coffee:flex`}
            />
        </div>
    )
}

export default CheckIcon
