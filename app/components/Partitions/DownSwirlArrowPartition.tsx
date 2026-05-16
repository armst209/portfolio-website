import Image from 'next/image'
import DownArrow from '@public/assets/downward-scribble-arrow.svg'
import ClosingBracket from '@public/assets/closing-bracket.svg'

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
                src={ClosingBracket}
                alt="closing bracket"
                height={160}
                className="flex black-color-filter dark:hidden"
            />
        </section>
    )
}

export default DownSwirlArrowPartition
