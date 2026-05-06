import React from 'react'

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center border-t-[.5px] border-t-[hsl(240,4,16)] w-full h-40 p-4 mb-6 pr-6 lg:justify-between lg:flex-row">
            <div>
                <div>
                    <h2 className="emerald-green-highlight font-bold">{`© ${new Date().getFullYear()} Aaron Armstrong. All rights are reserved.`}</h2>
                </div>
            </div>
            <p>Website built with Next.js, Typescript and Tailwind CSS.</p>

        </footer>
    )
}

export default Footer