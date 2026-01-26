import Link from "next/link";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L3KLH0821"
        ></Script>
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-6L3KLH0821');
    `}
        </Script>
      </head>
      <body>
        {header}
        <main className="main-content">{children}</main>
        {footer}
      </body>
    </html>
  );
}
