// import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Hot Springs Atlas - Find Natural Hot Springs Across the USA",
  description:
    "Discover natural hot springs across the United States with detailed guides, locations, and tips to plan your perfect soak in nature.",
};

export default function Home() {
  return (
    <main className="container">
      <h1>Hot Springs in America: Discover Natural Healing Waters</h1>

      <div className="button-group">
        <button className="btn">
          <a href="/explore-by-state">Explore Hot Springs by State</a>
        </button>
        <button className="btn">
          <a href="/explore-by-city">Explore Hot Springs by City</a>
        </button>
      </div>

      <p>
        Explore the breathtaking hot springs across America, where geothermal
        wonders offer relaxation, therapeutic benefits, and unforgettable
        adventures. From the steaming pools of Yellowstone to the mineral-rich
        waters of Arkansas, discover the best hot springs destinations in the
        USA.
      </p>

      <h2 style={{ fontSize: "1.65rem" }}>
        Popular Hot Springs Destinations in America
      </h2>
      <h3>Hot Springs National Park, Arkansas</h3>
      <p>
        The crown jewel of American hot springs, featuring historic bathhouses,
        thermal waters, and outdoor pools. Perfect for a relaxing getaway.
      </p>

      <h3>Yellowstone National Park, Wyoming</h3>
      <p>
        Experience geothermal wonders with geysers, mud pots, and hot springs in
        one of the most geologically active areas on Earth.
      </p>

      <h3>Big Sur, California</h3>
      <p>
        Coastal hot springs offering stunning ocean views and natural mineral
        waters for ultimate rejuvenation.
      </p>

      <h3>Glenwood Hot Springs, Colorado</h3>
      <p>
        Crystal-clear pools fed by natural hot springs, surrounded by majestic
        mountains.
      </p>

      <h2 style={{ fontSize: "1.65rem" }}>
        Frequently Asked Questions About Hot Springs in America
      </h2>
      <h3>What are hot springs?</h3>
      <p>
        Hot springs are natural bodies of water heated by geothermal energy from
        the Earth's core, often containing dissolved minerals.
      </p>

      <h3>Are hot springs safe to visit?</h3>
      <p>
        Most developed hot springs are safe, but always check water quality
        reports. Natural, undeveloped springs may have bacteria or high
        temperatures – exercise caution.
      </p>

      <h3>What health benefits do hot springs provide?</h3>
      <p>
        Hot springs can help with muscle relaxation, improved circulation,
        stress reduction, and may alleviate symptoms of arthritis and skin
        conditions due to mineral content.
      </p>

      <h3>When is the best time to visit hot springs?</h3>
      <p>
        Summer months offer pleasant weather, but winter visits can be magical
        with steam rising from the water. Check seasonal availability as some
        springs close in winter.
      </p>

      <h3>Do I need reservations for hot springs?</h3>
      <p>
        Popular spots like Hot Springs National Park require reservations during
        peak seasons. Always check ahead for entry requirements and fees.
      </p>

      <h3>What should I bring to a hot springs visit?</h3>
      <p>
        Bring swimwear, towels, and a change of clothes. Some locations offer
        rental gear, but it's best to check beforehand.
      </p>

      <h3>Are there clothing optional hot springs in America</h3>
      <p>
        Some hot springs facilities in America are clothing optional,
        particularly in private or resort settings. Always check the specific
        rules and policies of each location before visiting.
      </p>

      <h3>Why Choose Hot Springs in America?</h3>
      <p>
        America's hot springs offer diverse experiences from rustic wilderness
        soaks to luxurious spa resorts. Whether you're seeking adventure,
        healing, or simply relaxation, our nation's geothermal treasures provide
        unparalleled natural beauty and wellness opportunities.
      </p>

      <h2>Key Statistics About Hot Springs in America</h2>
      <ul>
        <li>
          <strong>Over 1,000 Hot Springs:</strong> The United States boasts more
          than 1,000 natural hot springs scattered across 40 states.
        </li>
        <li>
          <strong>Arkansas Hot Springs National Park:</strong> Home to the
          largest collection of hot springs in the world, with 47 springs
          producing over 700,000 gallons of water daily.
        </li>
        <li>
          <strong>Geothermal Activity:</strong> Hot springs are found in areas
          with volcanic or tectonic activity, with temperatures ranging from
          100°F to over 200°F.
        </li>
        <li>
          <strong>Therapeutic Benefits:</strong> Many hot springs contain
          minerals like sulfur, magnesium, and calcium, known for their healing
          properties for skin conditions, arthritis, and stress relief.
        </li>
        <li>
          <strong>Economic Impact:</strong> Hot springs tourism generates
          millions in revenue annually, supporting local economies and
          conservation efforts.
        </li>
      </ul>
    </main>
  );
}
