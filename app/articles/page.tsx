import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllArticles } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Articles | AI Prompt Refinement",
  description:
    "Browse premium articles on AI prompt refinement, AI video generation, cinematic prompting, and creative workflow systems.",
};

export const revalidate = 60;

export default async function ArticlesPage() {
  const articles = (await getAllArticles()).slice(0, 20);

  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <p className="eyebrow">Archive</p>
          <h1>Articles</h1>
          <p>Explore every guide, framework, and case study in the AI Prompt Refinement library.</p>
        </section>
        <section className="section">
          <div className="article-grid article-archive-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="pagination-row">
            <a className="secondary-action" href="/articles?next=2">
              Next page
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
