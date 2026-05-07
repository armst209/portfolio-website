import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { Toaster } from 'react-hot-toast'

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex flex-col flex-1 items-center justify-center dark:bg-black h-full w-full">
            <Navigation />
            {children}
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
        </main >
    )
}

export default PageContainer