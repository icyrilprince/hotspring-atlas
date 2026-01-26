import getAllListings, { getListingsByState } from "@/lib/listing";
import "../../globals.css";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const properties = getAllListings();
  const uniqueStates = [...new Set(properties.map((p) => p["location.state"]))];
  return uniqueStates.map((listing) => {
    const stateSlug = listing.replace(/\s+/g, "-").toLowerCase();
    return { state: stateSlug };
  });
}

export default async function ListingPage({ params }) {
  const { state: encodedState } = await params;
  const stateSlug = decodeURIComponent(encodedState);
  const state = stateSlug.replace(/-/g, " ");
  const listings = getListingsByState(state);

  // Function to convert to title case (capitalize first letter of each word)
  const toTitleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="container">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li style={{ margin: "0 8px" }}> &gt; </li>
          <li>{toTitleCase(state)}</li>
        </ol>
      </nav>
      <h1>
        List of all Hot Springs in {toTitleCase(state)} in{" "}
        {new Date().getFullYear()}
      </h1>
      <ul className="card-grid">
        {listings.map((item) => (
          <li key={item.slug} className="card">
            <Link href={`/listing/${item.slug}`}>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
