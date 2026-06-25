import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3>
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
      <div className="article-footer">
        <time dateTime={article.date}>{article.date}</time>
        <Link href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}>
          Read
        </Link>
      </div>
    </article>
  );
}
