export default async function sitemap() {
  const slugs = ['/', '/experience', '/work', '/contact']
  const pages = slugs.map((page) => ({
    url: `https://alexfields1023.com${page}`,
    lastModified: new Date().toISOString(),
  }))
  return pages
}
