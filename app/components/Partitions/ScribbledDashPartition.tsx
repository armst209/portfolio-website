import ScribbledDash from '@public/assets/icons/scribbled-dash.svg'
import Image from 'next/image'

const ScribbledDashPartition = ({ className }: { className?: string }) => {
    return (
        <section className={`flex justify-center ${className}`}>
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="hidden orange-color-filter w-50 dark:flex coffee:hidden"
            />
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="flex black-color-filter w-50 dark:hidden coffee:hidden"
            />
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="hidden top-0 right-0 left-0 coffee-color-filter w-50 dark:hidden coffee:flex"
            />
        </section>
    )
}

export default ScribbledDashPartition
