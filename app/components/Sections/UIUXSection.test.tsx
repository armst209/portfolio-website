import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import UIUXSection from './UIUXSection'

describe('UIUXSection', () => {
    it('renders', () => {
        const { container } = render(<UIUXSection />)
        expect(container.firstChild).toBeTruthy()
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(<UIUXSection />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
