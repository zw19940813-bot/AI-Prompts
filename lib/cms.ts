import { articles as fallbackArticles, getArticleBySlug as getFallbackArticleBySlug } from "./articles";
import type { Article } from "./articles";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-06-25";
const token = process.env.SANITY_API_TOKEN;

function hasSanityConfig() {
  return Boolean(projectId && dataset);
}

function normalizeArticle(article: Partial<Article>): Article | null {
  if (!article.slug || !article.title) {
    return null;
  }

  return {
    slug: article.slug,
    title: article.title,
    category: article.category || "Prompt Refinement",
    date: article.date || new Date().toISOString().slice(0, 10),
    readTime: article.readTime || "5 min read",
    excerpt: article.excerpt || "",
    content: Array.isArray(article.content) ? article.content.filter(Boolean) : [],
  };
}

async function fetchFromSanity<T>(query: string): Promise<T | null> {
  if (!hasSanityConfig()) {
    return null;
  }

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { result?: T };
    return data.result ?? null;
  } catch {
    return null;
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const result = await fetchFromSanity<Partial<Article>[]>(
    `*[_type == "article"] | order(date desc) {
      title,
      category,
      date,
      readTime,
      excerpt,
      "slug": slug.current,
      content
    }`
  );

  const articles = result?.map(normalizeArticle).filter(Boolean) as Article[] | undefined;
  return articles?.length ? articles : fallbackArticles;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const result = await fetchFromSanity<Partial<Article> | null>(
    `*[_type == "article" && slug.current == ${JSON.stringify(slug)}][0] {
      title,
      category,
      date,
      readTime,
      excerpt,
      "slug": slug.current,
      content
    }`
  );

  const article = result ? normalizeArticle(result) : null;
  return article || getFallbackArticleBySlug(slug);
}
