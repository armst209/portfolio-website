import Image from 'next/image'
import DownArrow from '@public/assets/downward-scribble-arrow.svg'

const DownSwirlArrowPartition = ({ className }: { className?: string }) => {
    return (
        <section className={`flex justify-center ${className}`}>
            <Image
                src={DownArrow}
                alt="down arrow"
                height={160}
                className="hidden orange-color-filter dark:flex"
            />
            <Image
                src={DownArrow}
                alt="down arrow"
                height={160}
                className="flex black-color-filter dark:hidden"
            />
        </section>
    )
}

export default DownSwirlArrowPartition
