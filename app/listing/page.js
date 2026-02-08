import getAllListings from "../../lib/listing.js";
import "../globals.css";
import Link from "next/link";

const properties = getAllListings();

export async function generateMetadata() {
  return {
    title: "List of all Natural & Resort Hot Springs in the USA",
    description: `Explore all ${properties.length} hot springs across the United States, with detailed information such as temperature, lodging facilities, admission costs, alcohol availability and clothing requirements on each location.`,
  };
}

export default function ListingPage() {
  return (
    <div>
      <h1>List of all Hot Springs across United States</h1>

      <ul>
        {properties.map((item) => (
          <div key={item.slug}>
            <Link href={`/listing/${item.slug}`}>
              <h2>{item.name}</h2>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
