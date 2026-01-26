import getAllListings from "../../lib/listing.js";
import "../globals.css";
import Link from "next/link";

export default function ListingPage() {
  const properties = getAllListings();
  const cities = [...new Set(properties.map((p) => p["location.city"]))];
  return (
    <div className="container">
      <h1>Explore Hot Springs by City</h1>

      <ul className="card-grid">
        {cities.map((city) => (
          <li key={city} className="card">
            <Link
              href={`/explore-by-city/${city.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <h2>{city}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
