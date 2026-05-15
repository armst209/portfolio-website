import SocialLinksSection from '../Sections/SocialLinksSection'
import SiteLogo from '../Utility/SiteLogo'

const Footer = () => {
    return (
        <footer className="grid place-items-center h-75 border-t border-t-light-border w-full p-4 mb-6 pr-6 dark:border-t-dark-border">
            <div className="w-full  flex flex-col items-center md:w-[90%]">
                <div className="w-full flex justify-center mb-2 lg:mb-0 lg:justify-start">
                    <SiteLogo />
                </div>

                <div className="flex flex-col justify-between w-full mb-4 lg:mb-0 lg:flex-row">
                    <div className="flex justify-center w-full text-wrap text-center text-sm lg:justify-start">
                        <h2>{`© ${new Date().getFullYear()} Aaron Armstrong. All rights are reserved.`}</h2>
                    </div>
                    <div className="flex justify-center text-wrap text-center text-sm">
                        <p>
                            Website built with Next.js, Typescript and Tailwind CSS. Icons provided
                            by{' '}
                            <span>
                                <a
                                    href="https://www.flaticon.com/uicons"
                                    rel="noopener noreferer"
                                    target="_blank"
                                >
                                    Flaticon
                                </a>
                            </span>{' '}
                            &{' '}
                            <span>
                                <a
                                    href="https://www.flaticon.com/free-icons/javascript"
                                    title="javascript icons"
                                    rel="noopener noreferer"
                                    target="_blank"
                                >
                                    Bharat Icons
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex pt-2">
                    <SocialLinksSection />
                </div>
            </div>
        </footer>
    )
}

export default Footer
