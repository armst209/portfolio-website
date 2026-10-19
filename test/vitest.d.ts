import 'vitest';
import type CustomMatchers from 'jest-extended';

// Expose jest-extended matchers (toBeTrue, toBeArray, …) on Vitest's expect.
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
  interface Assertion<T = any> extends CustomMatchers<T> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
