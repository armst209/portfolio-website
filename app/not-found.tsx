import Link from "next/link"
import Image from "next/image"
import NotFoundIcon from "@public/assets/404.svg"
import BoxScribble from "@public/assets/scribble-box.svg"
import BackgroundSwirls from "@public/assets/swirls-bg.webp"

const NotFound = () => {
    return (
        <div className='relative h-screen flex flex-col justify-center items-center p-4 w-full'>
            <Image src={BackgroundSwirls} alt="background image swirls" fill style={{ objectFit: "cover" }} className="absolute inset-0" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="z-10 flex flex-row items-center justify-center">
                <Image src={NotFoundIcon} alt="404 icon" width={50} className="icon-emerald-filter pr-4" />|<h1 className="text-3xl pl-4 font-bold xl:text-5xl">Not Found</h1>
            </div>
            <h2 className="mb-5 z-10 xl:text-2xl">The page you are looking for does not exist.</h2>
            <Link href="/" className={`w-70 h-30 relative font-bold flex flex-row items-center justify-center cursor-pointer text-xl`}>
                <Image src={BoxScribble} className="scribble-color-filter absolute inset-0" style={{ objectFit: "cover", objectPosition: "center" }} alt="circle scribble" />
                <div className="z-10 flex flex-row justify-center items-center">
                    <p>Return Home</p>
                </div>

            </Link>
        </div>
    )
}

export default NotFound