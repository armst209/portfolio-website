import Link from 'next/link'
import Image from 'next/image'
import NotFoundIcon from '@public/assets/icons/404.svg'
import HomeIcon from '@public/assets/icons/home.svg'

const NotFound = () => {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center p-4 w-full">
            <div className="z-10 flex flex-row items-center justify-center">
                <Image
                    src={NotFoundIcon}
                    alt="404 icon"
                    width={50}
                    className="hidden orange-color-filter pr-4 dark:flex"
                />
                <Image
                    src={NotFoundIcon}
                    alt="404 icon"
                    width={50}
                    className="flex burgundy-color-filter pr-4 dark:hidden"
                />
                |<h1 className="font-display text-3xl pl-4 font-bold xl:text-5xl">Not Found</h1>
            </div>
            <h2 className="mb-5 z-10 xl:text-2xl">The page you are looking for does not exist.</h2>
            <Link
                href="/"
                className="p-4 text-center bg-black-custom text-white  border-2 border-dark-border rounded-md dark:text-black-custom dark:bg-orange-custom"
            >
                <div className="flex flex-row justify-center items-center">
                    <p className="font-bold mr-3">Return Home</p>
                    <Image src={HomeIcon} width={20} alt="home icon" className="hidden dark:flex" />
                    <Image
                        src={HomeIcon}
                        width={20}
                        alt="home icon"
                        className="flex white-color-filter dark:hidden"
                    />
                </div>
            </Link>
        </div>
    )
}

export default NotFound
