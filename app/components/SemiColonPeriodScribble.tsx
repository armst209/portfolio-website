import Image from "next/image"
import ScribblePeriod from "@public/assets/scribble-blob.svg"

const SemiColonPeriodScribble = () => {
    return (
        <div className="flex flex-col">
            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3" width={10} alt="scribble blob period" />
            <Image src={ScribblePeriod} className="scribble-color-filter ml-2 pb-1 w-2 lg:w-3" width={10} alt="scribble blob period" />
        </div>
    )
}

export default SemiColonPeriodScribble