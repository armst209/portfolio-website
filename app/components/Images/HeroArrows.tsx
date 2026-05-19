import PointingDownArrows from '@public/assets/icons/pointing down arrows.svg'
import CoffeeBeanIcon from '@public/assets/icons/coffee-beans.svg'
import Image from 'next/image'

const HeroArrows = () => {
    return (
        <>
            <Image
                src={PointingDownArrows}
                alt="pointing down arrows"
                className="flex black-color-filter dark:hidden w-30 mt-6 coffee:hidden"
            />
            <Image
                src={PointingDownArrows}
                alt="pointing down arrows"
                className="hidden orange-color-filter w-30 mt-6 dark:flex coffee:hidden"
            />
            <Image
                src={CoffeeBeanIcon}
                className="hidden coffee-color-filter w-10 mt-6 dark:hidden coffee:flex"
                alt="coffee bean icon"
            />
        </>
    )
}

export default HeroArrows
