import { ReactNode } from 'react'
import Navigation from './Navigation'

const PageContainer = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navigation />
            {children}
        </main >
    )
}

export default PageContainer