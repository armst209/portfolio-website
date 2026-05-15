import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import Hero from './Hero'

describe('Hero', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<Hero />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<Hero />)
        const results = (await axe(container)).violations
        expect(results).toHaveLength(0)
    })
})
