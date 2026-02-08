import getAllListings from "../../lib/listing.js";
import "../globals.css";
import Link from "next/link";
const properties = getAllListings();
const uniqueStates = [...new Set(properties.map((p) => p["location.state"]))];

export async function generateMetadata() {
  return {
    title: `Explore Hot Springs in ${uniqueStates.length} States across USA - Updated ${new Date().getFullYear()}`,
    description: `Discover hot springs across the United States organized for ${uniqueStates.length} states. Explore detailed information such as temperature, lodging facilities, admission costs, alcohol availability and clothing requirements for each location to plan your perfect soak in nature.`,
  };
}

export default function ListingPage() {
  return (
    <div className="container">
      <h1>Explore Hot Springs by State</h1>

      <ul className="card-grid">
        {uniqueStates.map((state) => (
          <li key={state} className="card">
            <Link
              href={`/explore-by-state/${state.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <h2>{state}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
