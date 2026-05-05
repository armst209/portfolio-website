import Link from "next/link"

const Navigation = () => {
    return (
        <header className="sticky top-0 z-20 w-full bg-background border-b-[.5px] border-b-[hsl(240,4,16)]">
            <nav className="flex flex-row p-4 w-full justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className='text-2xl font-bold text-emerald-600'>armst209.dev</h1>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="font-bold">
                        <Link className="mr-2" href="/">Home</Link>
                        <Link className="mr-2" href="/projects">Projects</Link>
                        <Link className="mr-2" href="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </header>)
}

export default Navigation