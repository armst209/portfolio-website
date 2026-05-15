import { render } from '@testing-library/react'
import { axe } from 'vitest-axe'

vi.mock('next/image', () => ({ default: (props: any) => <img {...props} /> }))

import SkillSetSection from './SkillSetSection'

describe('SkillSetSection', () => {
    it('renders without throwing an error', () => {
        expect(() => render(<SkillSetSection />)).not.toThrow()
    })
    it('should have no accessibility violations', async () => {
        const { container } = render(<SkillSetSection />)
        const results = (await axe(container)).violations

        expect(results).toHaveLength(0)
    })
})
