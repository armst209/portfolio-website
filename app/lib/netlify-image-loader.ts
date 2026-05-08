'use client'

export default function netlifyImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}): string {
  if (src.endsWith('.svg')) {
    return src
  }

  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: (quality ?? 75).toString(),
  })

  return `/.netlify/images?${params.toString()}`
}
