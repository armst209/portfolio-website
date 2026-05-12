import ScribbledDash from '@public/assets/icons/scribbled-dash.svg'
import Image from 'next/image'

const ScribbledDashPartition = () => {
    return (
        <div className="flex justify-center">
            <Image
                src={ScribbledDash}
                alt="pointing down arrows"
                className="top-0 right-0 left-0 scribble-color-filter w-50"
            />
        </div>
    )
}

export default ScribbledDashPartition
