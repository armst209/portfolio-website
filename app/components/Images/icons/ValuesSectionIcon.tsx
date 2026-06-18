import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const ValuesSectionIcon = ({ title, icon }: { title: string; icon: string | StaticImport }) => {
    return (
        <>
            <Image
                src={icon}
                alt={`${title} icon`}
                className="hidden w-10 orange-color-filter dark:flex coffee:hidden"
            />
            <Image
                src={icon}
                alt={`${title} icon`}
                className="flex w-10 black-color-filter dark:hidden coffee:hidden"
            />
            <Image
                src={icon}
                alt={`${title} icon`}
                className="hidden w-10 coffee-color-filter dark:hidden coffee:flex"
            />
        </>
    )
}

export default ValuesSectionIcon
