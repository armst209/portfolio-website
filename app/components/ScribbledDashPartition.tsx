import ScribbledDash from '@public/assets/icons/scribbled-dash.svg'
import Image from 'next/image'

const ScribbledDashPartition = () => {
    return (
        <section className="flex justify-center">
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="top-0 right-0 left-0 scribble-color-filter w-50"
            />
        </section>
    )
}

export default ScribbledDashPartition
