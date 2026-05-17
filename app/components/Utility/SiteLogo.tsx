import Link from 'next/link'
import Image from 'next/image'
import ScribblePeriod from '@public/assets/icons/scribble-blob.svg'

const SiteLogo = () => {
    return (
        <Link href="/">
            <h1 className="flex flex-row text-lg font-bold font-display text-black-custom md:text-2xl dark:text-white coffee:text-coffee">
                armst209
                <span className="flex items-end w-3 pb-1">
                    <Image
                        src={ScribblePeriod}
                        className="hidden orange-color-filter w-2 dark:flex coffee:hidden"
                        alt="scribble blob period"
                    />
                    <Image
                        src={ScribblePeriod}
                        className="flex black-color-filter w-2 dark:hidden coffee:hidden"
                        alt="scribble blob period"
                    />
                    <Image
                        src={ScribblePeriod}
                        className="hidden coffee-color-filter w-2 dark:hidden coffee:flex"
                        alt="scribble blob period"
                    />
                </span>
                dev
            </h1>
        </Link>
    )
}

export default SiteLogo
