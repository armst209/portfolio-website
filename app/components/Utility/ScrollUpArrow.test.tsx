import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import ScrollUpArrow from './ScrollUpArrow'

describe('ScrollUpArrow', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<ScrollUpArrow />)).not.toThrow()
    })

    it('renders and calls scrollTo on click', async () => {
        render(<ScrollUpArrow />)

        window.scrollY = 15
        window.scrollX = 15
        const button = screen.getByLabelText(/scroll to top/i)
        userEvent.click(button)

        waitFor(() => {
            expect(window.scrollX).toBe(0)
            expect(window.scrollY).toBe(0)
        })
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(<ScrollUpArrow />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
