/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mojica.de/",
  generateRobotsTxt: true, // (optional)
  exclude: ["/tracker*"],
  // ...other options
};
