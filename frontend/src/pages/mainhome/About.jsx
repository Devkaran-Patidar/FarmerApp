import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About AgroMart</h2>
        <p>
          AgroMart is a mobile platform built to empower farmers by removing
          middlemen from the supply chain. We provide direct market access,
          transparent pricing, and digital solutions to improve agricultural trade.
        </p>

        <div className="about-stats">
          <div>
            <h3>500+</h3>
            <p>Farmers Connected</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>Buyers Registered</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
