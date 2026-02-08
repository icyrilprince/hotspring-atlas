export function hotSpringSchema(listing) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@type": "Place",
    name: listing.name,
    description: listing.intro,
    url: `https://www.hotspringatlas.com/listing/${listing.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: listing["location.city"],
      addressRegion: listing["location.state"],
      addressCountry: "USA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: listing.latitude,
      longitude: listing.longitude,
    },
    publicAccess: true,
  };
}

export function PlaceSchema(place, springs) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Hot Springs in ${city}`,
    itemListElement: springs.map((spring, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.hotspringatlas.com/listing/${spring.slug}`,
      name: spring.name,
    })),
  };
}
