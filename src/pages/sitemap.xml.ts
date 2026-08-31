import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export const GET: APIRoute = async () => {
  const books = await getCollection("books");

  const urls = [
    `${site.url}/`,
    ...books.map((book) => `${site.url}/books/${book.slug}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
