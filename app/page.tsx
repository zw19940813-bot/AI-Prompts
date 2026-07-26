import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllArticles } from "@/lib/cms";

export const revalidate = 60;

export default async function Home() {
  const featuredArticles = (await getAllArticles()).slice(0, 20);
  const leadArticle = featuredArticles[0];
  const supportingArticles = featuredArticles.slice(1, 10);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-brand-mark">
              <Image src="/mark.svg" alt="" width={54} height={54} priority />
              <span>AI Video Prompt Lab</span>
            </div>
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
          <div className="hero-panel" aria-label="AI video prompt refinement overview">
            <div className="panel-top">
              <span>Prompt Refinement System</span>
              <span>AI-01</span>
            </div>
            <div className="system-core" aria-hidden="true">
              <Image src="/mark.svg" alt="" width={68} height={68} />
              <div>
                <strong>From rough idea to controlled AI video direction.</strong>
                <small>Clean prompts. Stable shots. Repeatable workflows.</small>
              </div>
            </div>
            <div className="prompt-window">
              <span>
                <b>Subject</b>
                <em>One clear visual focus</em>
              </span>
              <span>
                <b>Motion</b>
                <em>Controlled movement</em>
              </span>
              <span>
                <b>Lens</b>
                <em>Camera perspective</em>
              </span>
              <span>
                <b>Light</b>
                <em>Mood and realism</em>
              </span>
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
              <p className="eyebrow">The Journal</p>
              <h2>dreamprompts</h2>
            </div>
            <Link className="text-link" href="/articles">
              View more
            </Link>
          </div>
          {leadArticle ? (
            <div className="editorial-layout home-editorial">
              <Link className="lead-story" href={`/articles/${leadArticle.slug}`}>
                <div className="lead-visual" aria-hidden="true">
                  <Image className="visual-mark" src="/mark.svg" alt="" width={52} height={52} />
                  <span className="visual-chip">Featured System</span>
                  <span className="visual-line visual-line-one" />
                  <span className="visual-line visual-line-two" />
                  <span className="visual-line visual-line-three" />
                  <span className="visual-orb visual-orb-one" />
                  <span className="visual-orb visual-orb-two" />
                </div>
                <div className="lead-copy">
                  <p className="article-kicker">{leadArticle.category}</p>
                  <h3>{leadArticle.title}</h3>
                  <p>{leadArticle.excerpt}</p>
                  <span>Read story</span>
                </div>
              </Link>
              <div className="article-grid cover-grid">
                {supportingArticles.map((article, index) => (
                  <ArticleCard key={article.slug} article={article} coverIndex={index} showCover />
                ))}
              </div>
            </div>
          ) : null}
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
