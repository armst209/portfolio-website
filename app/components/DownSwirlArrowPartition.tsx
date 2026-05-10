import Image from "next/image"
import DownArrow from "@public/assets/icons/down-arrow.svg"

const DownSwirlArrowPartition = () => {
    return (
        <div className="flex justify-center">
            <Image src={DownArrow} alt="down arrow" height={150} />
        </div>
    )
}

export default DownSwirlArrowPartition