

import Image from "next/image"
import ArtIcon from "@public/assets/icons/paintbrush-pencil.svg"


const ViewProjectsButton = () => {
    return (
        <button className="w-55 h-15 p-2 border-2 border-[#e29c03] text-black rounded-md font-bold flex flex-row items-center justify-center cursor-pointer bg-[#e29c03] mb-4 text-xl md:mb-0">
            <div className="z-10 flex flex-row justify-center items-center">
                <Image src={ArtIcon} alt="project icon" width={20} className=" mr-4" />
                <p>View Projects</p>
            </div>

        </button>
    )
}

export default ViewProjectsButton