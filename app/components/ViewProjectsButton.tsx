

import Image from "next/image"
import BoxScribble from "@public/assets/scribble-box.svg"
import ArtIcon from "@public/assets/paintbrush-pencil.svg"


const ViewProjectsButton = () => {
    return (
        <button className={`w-70 h-30 relative font-bold flex flex-row items-center justify-center cursor-pointer text-xl`}>
            <Image src={BoxScribble} className="scribble-color-filter absolute inset-0" style={{ objectFit: "cover", objectPosition: "center" }} alt="circle scribble" />

            <div className="z-10 flex flex-row justify-center items-center">
                <Image src={ArtIcon} alt="project icon" width={20} className="icon-emerald-filter mr-4" />
                <p>View Projects</p>
            </div>

        </button>
    )
}

export default ViewProjectsButton