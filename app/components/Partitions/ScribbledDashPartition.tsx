import ScribbledDash from '@public/assets/icons/scribbled-dash.svg'
import Image from 'next/image'

const ScribbledDashPartition = ({ className }: { className?: string }) => {
    return (
        <section className={`flex justify-center ${className}`}>
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="hidden orange-color-filter w-50 dark:flex"
            />
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="flex black-color-filter w-50 dark:hidden"
            />
        </section>
    )
}

export default ScribbledDashPartition
