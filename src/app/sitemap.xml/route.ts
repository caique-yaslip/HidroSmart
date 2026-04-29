import pagesData from "@/data/pagesData";
import { NextResponse } from "next/server";
import { url as baseUrl } from "@/settings/settings";

export async function GET() {
  const fixedPages = [
    { path: "", changefreq: "daily", priority: 1.0 },
    { path: "contato", changefreq: "daily", priority: 0.7 },
    { path: "informacoes", changefreq: "yearly", priority: 0.3 },
    { path: "mapa-site", changefreq: "yearly", priority: 0.3 },
  ];

  const contractedPages = pagesData.map((page: { contratada: string }) => ({
    path: page.contratada,
    changefreq: "daily",
    priority: 0.7,
  }));

  const allPages = [...fixedPages, ...contractedPages];

  const today = new Date().toISOString().split("T")[0]; // Apenas YYYY-MM-DD || Alterar para data fixa ao subir em produção

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
