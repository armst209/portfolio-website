import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './app/lib/netlify-image-loader.ts',
  },
}

export default nextConfig
