import { render, screen } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import CustomAccordionItem from './CustomAccordionItem'

describe('CustomAccordionItem', () => {
    it('renders with header', () => {
        render(<CustomAccordionItem header="Test Header" />)
        expect(screen.getByText(/test header/i)).toBeInTheDocument()
    })

    it('renders without throwing an error', () => {
        expect(() => render(<CustomAccordionItem header="Test Header" />)).not.toThrow()
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(<CustomAccordionItem header="Test Header" />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
