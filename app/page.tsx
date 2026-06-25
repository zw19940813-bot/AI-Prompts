import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllArticles } from "@/lib/cms";

export const revalidate = 60;

export default async function Home() {
  const featuredArticles = (await getAllArticles()).slice(0, 20);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI Prompt & Video Generation</p>
            <h1>AI Prompt Refinement: Elevate Your AI Video Quality.</h1>
            <p className="hero-text">
              A refined editorial library for sharper prompts, cleaner AI video outputs, cinematic shot design, and repeatable creative workflows.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/articles">
                Explore Articles
              </Link>
              <a className="secondary-action" href="#latest">
                Latest Insights
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Site theme overview">
            <div className="panel-top">
              <span>Refinement System</span>
              <span>01</span>
            </div>
            <div className="prompt-window">
              <span>Subject</span>
              <span>Motion</span>
              <span>Lens</span>
              <span>Light</span>
            </div>
            <div className="timeline">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>

        <section className="section" id="latest">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Latest Articles</p>
              <h2>Latest Articles</h2>
            </div>
            <Link className="text-link" href="/articles">
              View all
            </Link>
          </div>
          <div className="article-grid">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="more-row">
            <Link className="primary-action" href="/articles">
              View More Articles
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
