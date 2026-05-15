import '@testing-library/jest-dom'
import * as matchers from 'vitest-axe/matchers'
import 'vitest-axe/extend-expect'
import { defineConfig } from 'vitest/config'
import { expect } from 'vitest'

expect.extend(matchers)

export default defineConfig({
    test: {
        setupFiles: ['vitest-setup.ts'],
    },
})
