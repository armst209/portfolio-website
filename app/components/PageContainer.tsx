import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { Toaster } from 'react-hot-toast'

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main >
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