import getAllListings from "../../lib/listing.js";
import "../globals.css";
import Link from "next/link";

const properties = getAllListings();
const cities = [...new Set(properties.map((p) => p["location.city"]))];

export async function generateMetadata() {
  return {
    title: `Explore Hot Springs in ${cities.length} Cities across USA - Updated ${new Date().getFullYear()}`,
    description: `Discover hot springs across the United States organized for ${cities.length} cities. Explore detailed information such as temperature, lodging facilities, admission costs, alcohol availability and clothing requirements for each location to plan your perfect soak in nature.`,
  };
}

export default function ListingPage() {
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
