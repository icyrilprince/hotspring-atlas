import "../globals.css";

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have questions about hot
        springs, suggestions for the site, or just want to share your
        experiences, feel free to reach out. Our team is passionate about
        connecting hot spring enthusiasts and ensuring everyone has access to
        the best geothermal experiences.
      </p>

      <div style={{ marginBottom: "2rem" }}>
        <h2>Get in Touch</h2>
        <div style={{ display: "grid", gap: "1rem", maxWidth: "500px" }}>
          <div>
            <strong>Email:</strong> info@hotspringatlas.com
          </div>

          <div>
            <strong>Business Hours:</strong>
            <br />
            Monday - Friday: 9:00 AM - 6:00 PM CST
            <br />
            Saturday: 10:00 AM - 4:00 PM CST
            <br />
            Sunday: Closed
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>Follow Us</h2>
        <div style={{ display: "grid", gap: "0.5rem", maxWidth: "300px" }}>
          <div>
            <strong>Instagram:</strong> @hotspringatlas
          </div>
          <div>
            <strong>Twitter:</strong> @HotSpringAtlas
          </div>
          <div>
            <strong>Facebook:</strong> Hot Spring Atlas
          </div>
        </div>
      </div>

      <div>
        <h2>Send us a Message</h2>
        <p>
          For inquiries about specific hot springs, partnership opportunities,
          or general feedback, please use the contact information above. We
          typically respond within 24-48 hours.
        </p>
      </div>
    </div>
  );
}
