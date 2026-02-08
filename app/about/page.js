import "../globals.css";

export async function generateMetadata() {
  return {
    title:
      "About Hot Spring Atlas - Your Ultimate Guide to Natural Hot Springs in the USA",
    description: `Learn about the mission and passion behind Hot Spring Atlas, your comprehensive guide to discovering natural hot springs across the United States. Explore our commitment to providing accurate information, promoting responsible tourism, and connecting hot spring enthusiasts with unforgettable geothermal experiences.`,
  };
}

export default function About() {
  return (
    <div className="container">
      <h1>About Hot Spring Atlas</h1>
      <p>
        Welcome to Hot Spring Atlas, a labor of love created by passionate hot
        spring enthusiasts for fellow adventurers and wellness seekers. As
        someone who has spent countless hours exploring the geothermal wonders
        of America, I understand the transformative power of immersing oneself
        in nature's healing waters.
      </p>
      <p>
        My journey with hot springs began years ago, and what started as a
        personal passion quickly evolved into a mission to share these
        incredible experiences with others. Hot springs aren't just about
        relaxation—they're about connection, discovery, and the profound sense
        of peace that comes from being in harmony with nature's most ancient
        healing traditions.
      </p>
      <p>
        Our dedicated team shares this passion. We've traveled extensively
        across the United States, from the mineral-rich pools of Arkansas to the
        volcanic landscapes of the West, documenting and curating the best hot
        spring experiences the country has to offer. We believe that everyone
        deserves access to these natural sanctuaries, and that's why we've built
        this comprehensive guide.
      </p>
      <p>
        Hot Spring Atlas is more than just a directory—it's your trusted
        companion for discovering authentic hot spring experiences. Whether
        you're a seasoned soaker or just beginning your geothermal journey, our
        platform provides detailed information, accurate directions, and insider
        tips to ensure you have the most rewarding visit possible.
      </p>
      <p>
        We're committed to promoting responsible tourism and environmental
        stewardship. Our guides emphasize sustainable practices and respect for
        these precious natural resources, ensuring that future generations can
        continue to enjoy the healing waters that have captivated us for so
        long.
      </p>
      <p>
        Thank you for joining us on this journey. May your hot spring adventures
        bring you the same joy, relaxation, and wonder that have enriched our
        lives. Welcome to the community of hot spring enthusiasts—your next
        unforgettable soak awaits.
      </p>
    </div>
  );
}
