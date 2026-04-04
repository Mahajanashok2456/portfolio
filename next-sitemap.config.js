/** @type {import('next-sitemap').IConfig} */ 
 module.exports = { 
   siteUrl: 'https://mahajanashok.in', 
   generateRobotsTxt: false, 
   changefreq: 'weekly', 
   priority: 0.8, 
   exclude: ['/api/*'], 
   additionalPaths: async (config) => [ 
     { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }, 
     { loc: '/#projects', changefreq: 'weekly', priority: 0.9 }, 
     { loc: '/#about', changefreq: 'monthly', priority: 0.7 }, 
     { loc: '/#contact', changefreq: 'monthly', priority: 0.7 }, 
   ] 
 }
