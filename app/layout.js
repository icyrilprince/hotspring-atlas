import Link from "next/link";

export const metadata = {
  title: "Hot Spring Atlas",
  description: "Key guides about hot springs across the United States.",
};

export default function RootLayout({ children }) {
  let header = (
    <header className="app-header">
      <nav className="nav-container">
        <div className="nav-brand">
          <Link href="/">Hot Spring Atlas</Link>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="/explore-by-state">Explore by State</a>
          </li>
          <li>
            <a href="/explore-by-city">Explore by City</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );

  let footer = (
    <footer className="app-footer">
      {new Date().getFullYear()} Hot Spring Atlas. All rights reserved.
    </footer>
  );

  return (
    <html lang="en">
      <body>
        {header}
        <main className="main-content">{children}</main>
        {footer}
      </body>
    </html>
  );
}
