import Image from 'next/image'
import DownArrow from '@public/assets/downward-scribble-arrow.svg'
import ClosingBracket from '@public/assets/closing-bracket.svg'
import HotCoffee from '@public/assets/hot-coffee.svg'

const DownSwirlArrowPartition = ({ className }: { className?: string }) => {
    return (
        <section className={`flex justify-center ${className}`}>
            <Image
                src={DownArrow}
                alt="down arrow"
                height={160}
                className="hidden orange-color-filter dark:flex coffee:hidden"
            />

            <Image
                src={ClosingBracket}
                alt="closing bracket"
                height={160}
                className="flex black-color-filter dark:hidden coffee:hidden"
            />
            <Image
                src={HotCoffee}
                alt="closing bracket"
                height={160}
                className="hidden coffee-color-filter dark:hidden coffee:flex"
            />
        </section>
    )
}

export default DownSwirlArrowPartition
