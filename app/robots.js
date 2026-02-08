import { userAgent } from "next/server";

export default function Robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://www.hotspringatlas.com/sitemap.xml`,
  };
}
