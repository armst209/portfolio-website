import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { Toaster, toast } from 'react-hot-toast'
import ScrollUpArrow from './ScrollUpArrow'

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation />
            <button onClick={() => toast('hell0')}>Trigger Toast</button>
            <main className="grid place-items-center w-full">
                <div className="w-full md:w-[90%]">{children}</div>
            </main>
            <ScrollUpArrow />
            <Footer />
            <Toaster
                toastOptions={{
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
