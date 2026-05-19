import Image from 'next/image'
import CoffeeMachineIcon from '@public/assets/icons/coffee-maker.svg'
import HamburgerIcon from '@public/assets/icons/menu.svg'

const MobileMenuIcon = () => {
    return (
        <>
            <Image
                src={HamburgerIcon}
                width={25}
                height={25}
                alt="mobile menu icon"
                className="hidden white-color-filter dark:flex coffee:hidden"
            />
            <Image
                src={HamburgerIcon}
                alt="mobile menu icon"
                width={25}
                height={25}
                className="flex black-color-filter dark:hidden coffee:hidden"
            />
            <Image
                src={CoffeeMachineIcon}
                alt="mobile menu icon as coffee machine icon"
                width={25}
                height={25}
                className="hidden dark-coffee-color-filter dark:hidden coffee:flex"
            />
        </>
    )
}

export default MobileMenuIcon
