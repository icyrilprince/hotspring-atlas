import getAllListings, { getListingBySlug } from "../../../lib/listing.js";
import "../../globals.css";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const properties = getAllListings();
  return properties.map((listing) => ({ slug: listing.slug }));
}

export default async function ListingPage({ params }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  // Function to convert to title case (capitalize first letter of each word)
  const toTitleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
  };
  const stateSlug = listing["location.state"]
    .replace(/\s+/g, "-")
    .toLowerCase();
  const citySlug = listing["location.city"].replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="listing-content">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li style={{ margin: "0 8px" }}> &gt; </li>
          <li>
            <Link href={`/explore-by-state/${stateSlug}`}>
              {toTitleCase(listing["location.state"])}
            </Link>
          </li>
          <li style={{ margin: "0 8px" }}> &gt; </li>
          <li>
            <Link href={`/explore-by-city/${citySlug}`}>
              {toTitleCase(listing["location.city"])}
            </Link>
          </li>
          <li style={{ margin: "0 8px" }}> &gt; </li>
          <li>{listing.name}</li>
        </ol>
      </nav>

      <h1>
        {listing.name} - Updated {new Date().getFullYear()}
      </h1>

      <h2>{listing.intro}</h2>
      <p>
        <strong>Location:</strong> {listing["location.city"]},{" "}
        {listing["location.state"]}
      </p>
      <p>
        <strong>Type:</strong> {listing.hotspring_type}
      </p>
      <p>
        <strong>Temperature:</strong> {listing.Temperature}
      </p>
      <p>
        <strong>Phone:</strong> {listing.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={listing.website} target="_blank" rel="noopener noreferrer">
          {listing.website}
        </a>
      </p>
      <p>
        <strong>Admission:</strong> {listing.admission}
      </p>
      <p>
        <strong>Best Time:</strong> {listing.best_time}
      </p>
      <p>
        <strong>Family Friendly:</strong> {listing.family_friendly}
      </p>
      <p>
        <strong>Lodging:</strong> {listing.lodging}
      </p>
      <p>
        <strong>Clothing Optional:</strong> {listing.clothing}
      </p>
      <p>
        <strong>Camping:</strong> {listing.camping}
      </p>
      <p>
        <strong>Adults Only:</strong> {listing.adults_only}
      </p>
      <p>
        <strong>Alcohol Beverages:</strong> {listing.alcohol}
      </p>
      <p>
        <strong>Private Tub:</strong> {listing.private_tub}
      </p>
    </div>
  );
}
