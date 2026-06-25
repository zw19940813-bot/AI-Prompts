import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Content Admin | AI Prompt Refinement",
  description: "Content publishing instructions for AI Prompt Refinement.",
};

const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "https://www.sanity.io/manage";

export default function AdminPage() {
  return (
    <>
      <Header />
      <main>
        <section className="article-detail">
          <p className="eyebrow">Content Admin</p>
          <h1>Publish new articles from your content dashboard.</h1>
          <p className="article-lead">
            Connect a Sanity project once, then create and publish articles without uploading code again.
          </p>
          <div className="article-body">
            <p>
              Open your Sanity dashboard, create a new article, fill in the title, slug, category, date, read time, excerpt, and content fields, then publish it.
            </p>
            <p>
              The website checks for new content every 60 seconds. If Sanity is not connected yet, the site will continue using the built-in sample articles.
            </p>
            <p>
              Admin dashboard: <a className="inline-link" href={studioUrl}>Open Sanity</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
