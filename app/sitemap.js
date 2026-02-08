import getAllListings from "@/lib/listing";

export default function Sitemap() {
  const baseUrl = "https://www.hotspringatlas.com";
  const listings = getAllListings();

  // Individual listing URLs
  const listingUrls = listings.map((listing) => ({
    url: `${baseUrl}/listing/${listing.slug}`,
    lastModified: new Date(),
  }));
  //Unique States
  const uniqueStates = [
    ...new Set(
      listings.map((listing) =>
        listing["location.state"].toLowerCase().replace(/\s+/g, "-"),
      ),
    ),
  ];
  const stateUrls = uniqueStates.map((state) => ({
    url: `${baseUrl}/explore-by-state/${state}`,
    lastModified: new Date(),
  }));

  //Unique Cities
  const uniqueCities = [
    ...new Set(
      listings.map((listing) =>
        listing["location.city"].toLowerCase().replace(/\s+/g, "-"),
      ),
    ),
  ];
  const cityUrls = uniqueCities.map((city) => ({
    url: `${baseUrl}/explore-by-city/${city}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/explore-by-state`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/explore-by-city`,
      lastModified: new Date(),
    },

    ...listingUrls,
    ...stateUrls,
    ...cityUrls,
  ];
}
