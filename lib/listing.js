import listings from "../data/testsample.json";

export default function getAllListings() {
  return listings;
}

export function getListingBySlug(slug) {
  return listings.find((listing) => listing.slug === slug);
}

export function getListingsByState(state) {
  return listings.filter(
    (listing) =>
      listing["location.state"].toLowerCase() === state.toLowerCase(),
  );
}

export function getListingsbyCity(city) {
  return listings.filter(
    (listing) => listing["location.city"].toLowerCase() === city.toLowerCase(),
  );
}
