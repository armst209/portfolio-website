import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/link', () => ({
    default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))
vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))
vi.mock('next-themes', () => ({ useTheme: () => ({ resolvedTheme: 'light', setTheme: vi.fn() }) }))

import PageContainer from './PageContainer'

describe('PageContainer', () => {
    it('renders children and layout', () => {
        render(
            <PageContainer>
                <div>child-content</div>
            </PageContainer>
        )
        expect(screen.getByText('child-content')).toBeInTheDocument()
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(
            <PageContainer>
                <div>child-content</div>
            </PageContainer>
        )
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
