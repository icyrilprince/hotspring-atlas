import getAllListings from "../../lib/listing.js";
import "../globals.css";
import Link from "next/link";

export default function ListingPage() {
  const properties = getAllListings();
  return (
    <div>
      <h1>List of all Hot Springs</h1>

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
