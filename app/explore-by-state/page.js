import getAllListings from "../../lib/listing.js";
import "../globals.css";
import Link from "next/link";

export default function ListingPage() {
  const properties = getAllListings();
  const uniqueStates = [...new Set(properties.map((p) => p["location.state"]))];
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
