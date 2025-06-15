module.exports = {
  siteUrl: 'https://www.sidakdhingra.in/',
  changefreq: 'monthly',
  // here is the new code
  priority: 0.8,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    let priority = config.priority
    let changefreq = config.changefreq
    // Set higher priority for home and team pages
    if (path === '/') {
      priority = 1.0 // Highest priority for the homepage
    } else if (path.includes('/blog')) {
      priority = 0.9 // High priority for the blog
      changefreq = 'weekly' // Change frequency for the blog
    }
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      priority: priority, // Dynamic priority based on the page
      changefreq: changefreq, // Dynamic changefreq based on the page
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}