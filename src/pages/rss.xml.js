import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'Bloomy Blog',
        description: 'Bloomy Blog',
        site: 'https://bloomyindev.me',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    })
}
