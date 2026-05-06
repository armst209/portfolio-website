import React from 'react'

const Footer = () => {
    return (
        <div className="border-t-[.5px] border-t-[hsl(240,4,16)] border-b-[.5px] border-b-[hsl(240,4,16)] w-full h-50 p-4 mb-6">
            <div>
                <h1>Aaron Armstrong</h1>
            </div>
            <p>Website built with Next.js, Typescript and Tailwind CSS.</p>
            <div>
                <h2>{`© ${new Date().getFullYear()} Aaron Armstrong. All rights are reserved.`}</h2>
            </div>
        </div>
    )
}

export default Footer