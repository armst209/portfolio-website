import Image from 'next/image'
import DownArrow from '@public/assets/icons/down-arrow.svg'

const DownSwirlArrowPartition = ({ className }: { className?: string }) => {
    return (
        <section className={`flex justify-center ${className}`}>
            <Image src={DownArrow} alt="down arrow" height={150} className="hidden dark:flex" />
            <Image
                src={DownArrow}
                alt="down arrow"
                height={150}
                className="flex black-color-filter dark:hidden"
            />
        </section>
    )
}

export default DownSwirlArrowPartition
