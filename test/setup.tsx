import { afterEach, expect, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from 'jest-extended';
import '@testing-library/jest-dom/vitest';
import type { ImgHTMLAttributes } from 'react';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// App Router hooks are not available outside Next; tests drive them via
// `mockNavigation` from `test/mocks/navigation`.
vi.mock('next/navigation', async () => await import('./mocks/navigation'));

// Vite resolves static image imports to plain URL strings, so swap next/image
// for a bare <img> that accepts either form.
vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    priority: _priority,
    placeholder: _placeholder,
    fill: _fill,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & {
    src: string | { src: string };
    priority?: boolean;
    placeholder?: string;
    fill?: boolean;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === 'string' ? src : src.src}
      alt={alt}
      {...props}
    />
  ),
}));
