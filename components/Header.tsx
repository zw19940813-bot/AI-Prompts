import Link from "next/link";
import { Brand } from "./Brand";

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <a href="mailto:hello@example.com">Contact</a>
        </div>
      </nav>
    </header>
  );
}
