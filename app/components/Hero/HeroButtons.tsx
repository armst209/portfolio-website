import Link from "next/link"
import Image from "next/image"
import ViewProjectsButton from "../ViewProjectsButton"
import ContactIcon from "@public/assets/icons/user-add.svg"



const HeroButtons = () => {
    return (
        <div id="hero-buttons" className="flex flex-col items-center pt-4 w-full md:w-auto md:flex-row">
            <Link href="/projects" className="md:mr-6">
                <ViewProjectsButton />
            </Link>
            <a href="#contact" className="z-10">
                <div className="w-full flex flex-col justify-center items-center z-10">
                    <button className="h-15 w-55 border-2 rounded-md p-2 font-bold flex flex-row items-center justify-center cursor-pointer bg-black text-lg">
                        <p className="mr-4">Contact Me</p>
                        <Image src={ContactIcon} alt="contact icon" width={20} className="icon-white-filter" />

                    </button>
                </div>
            </a>
        </div>
    )
}

export default HeroButtons