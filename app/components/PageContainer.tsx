import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { Toaster } from 'react-hot-toast'
import ScrollUpArrow from './ScrollUpArrow'

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation />
            <main className='grid place-items-center w-full'>
                <div className='w-full md:w-[90%]'>
                    {children}
                </div>
            </main >
            <ScrollUpArrow />
            <Footer />
            <Toaster toastOptions={{
                style: {
                    border: "1px solid grey",
                    padding: "1.5rem",
                    borderRadius: ".5rem",
                    height: "100%",
                    width: "auto",
                    color: "white",
                    backgroundColor: "var(--background)"
                },

                ariaProps: {
                    role: "status",
                    "aria-live": "polite",
                }
            }} />
        </>
    )
}

export default PageContainer