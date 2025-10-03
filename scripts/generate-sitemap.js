
const fs = require("fs");
const path = require("path");

const baseUrl = "https://brainleadsgroup.com"; 

// Only one page for your one-page React app
const pages = ["/"];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `<url>
  <loc>${baseUrl}${p}</loc>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), xml);
console.log("✅ Sitemap written to public/sitemap.xml");
