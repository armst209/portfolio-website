import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseURL = 'https://armst209.dev'
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/projects', '/about'],
        },

        sitemap: `${baseURL}/sitemap.xml`,
    }
}
