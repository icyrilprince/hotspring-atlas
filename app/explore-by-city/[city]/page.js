import getAllListings, { getListingsbyCity } from "@/lib/listing";
import "../../globals.css";
import Link from "next/link";
import { PlaceSchema } from "@/lib/hotSpringschema.js";

export const dynamicParams = false;

export async function generateStaticParams() {
  const properties = getAllListings();
  const uniqueCities = [...new Set(properties.map((p) => p["location.city"]))];
  return uniqueCities.map((listing) => {
    const citySlug = listing.replace(/\s+/g, "-").toLowerCase();
    return { city: citySlug };
  });
}
// Function to convert to title case (capitalize first letter of each word)
const toTitleCase = (str) => {
  return str.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
};

export function CitySchema({ params }) {
  const { city: encodedCity } = params;
  const citySlug = decodeURIComponent(encodedCity);
  const city = citySlug.replace(/-/g, " ");
  const listings = getListingsbyCity(city);
  const schema = PlaceSchema(city, listings);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export async function generateMetadata({ params }) {
  const { city: encodedCity } = await params;
  const citySlug = decodeURIComponent(encodedCity);
  const city = citySlug.replace(/-/g, " ");
  return {
    title: `Explore Hot Springs in ${toTitleCase(city)} - Updated ${new Date().getFullYear()}`,
    description: `Explore all hot springs in ${toTitleCase(city)}, with detailed information such as temperature, lodging facilities, admission costs, alcohol availability and clothing requirements on each location.`,
  };
}

export default async function ListingPage({ params }) {
  const { city: encodedCity } = await params;
  const citySlug = decodeURIComponent(encodedCity);
  const city = citySlug.replace(/-/g, " ");
  const listings = getListingsbyCity(city);

  // Get the state from the first listing (assuming all in same state)
  const state = listings.length > 0 ? listings[0]["location.state"] : "";
  const stateSlug = state.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="container">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li style={{ margin: "0 8px" }}> &gt; </li>
          <li>
            <Link href={`/explore-by-state/${stateSlug}`}>
              {toTitleCase(state)}
            </Link>
          </li>
          <li style={{ margin: "0 8px" }}> &gt; </li>
          <li>{toTitleCase(city)}</li>
        </ol>
      </nav>
      <h1>
        List of all Hot Springs in {toTitleCase(city)} in{" "}
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
