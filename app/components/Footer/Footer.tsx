
const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center border-t-[.5px] border-t-[hsl(240,4,16)] w-full h-40 p-4 mb-6 pr-6 ">
            <div className="flex flex-col justify-between w-full lg:flex-row">
                <div className="flex justify-center w-full text-wrap text-center lg:justify-start">
                    <h2 className="emerald-green-text-color font-bold">{`© ${new Date().getFullYear()} Aaron Armstrong. All rights are reserved.`}</h2>
                </div>
                <div className="flex justify-center text-wrap text-center">
                    <p>Website built with Next.js, Typescript and Tailwind CSS. Icons provided by <span><a href="https://www.flaticon.com/uicons" rel="noopener noreferer" target="_blank">Flaticon</a></span></p>
                </div>
            </div>

        </footer>
    )
}

export default Footer