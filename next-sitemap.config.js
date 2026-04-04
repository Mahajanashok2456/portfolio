/** @type {import('next-sitemap').IConfig} */ 
 module.exports = { 
   siteUrl: 'https://mahajanashok.in', 
   generateRobotsTxt: true, 
   sitemapSize: 7000,
   changefreq: 'weekly', 
   priority: 0.8, 
   exclude: ['/api/*'], 
   robotsTxtOptions: {
     policies: [
       {
         userAgent: '*',
         allow: '/',
         disallow: '/api/',
       },
     ],
     additionalSitemaps: [
       'https://mahajanashok.in/sitemap.xml',
     ],
   },
   additionalPaths: async (config) => [ 
     { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }, 
     { loc: '/#projects', changefreq: 'weekly', priority: 0.9 }, 
     { loc: '/#about', changefreq: 'monthly', priority: 0.7 }, 
     { loc: '/#contact', changefreq: 'monthly', priority: 0.7 }, 
   ] 
 }
