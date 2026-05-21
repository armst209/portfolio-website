import { ReactNode } from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'
import ScrollUpArrow from '../Utility/ScrollUpArrow'

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation />
            <main className="grid place-items-center w-full">
                <div className="w-full md:w-[90%]">{children}</div>
            </main>
            <ScrollUpArrow />
            <Footer />
            <Toaster
                toastOptions={{
                    duration: 4000,
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                }}
            />
        </>
    )
}

export default PageContainer
