module.exports = {
  siteUrl: 'https://www.sidakdhingra.in/',
  changefreq: 'monthly',

  priority: 0.8,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    let priority = config.priority
    let changefreq = config.changefreq
    if (path === '/') {
      priority = 1.0 
    } else if (path.includes('/blog')) {
      priority = 0.9 
      changefreq = 'weekly' 
    }
    return {
      loc: path,
      priority: priority, 
      changefreq: changefreq, 
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}

