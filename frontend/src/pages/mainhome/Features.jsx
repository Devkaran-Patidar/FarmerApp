import "./Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2>App Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Live Market Prices</h3>
            <p>Farmers can view updated crop prices in real-time.</p>
          </div>

          <div className="feature-card">
            <h3>Direct Orders</h3>
            <p>Buyers can order directly from farmers without agents.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Safe and reliable digital payment system.</p>
          </div>

          <div className="feature-card">
            <h3>Delivery Tracking</h3>
            <p>Track order and shipment status easily.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
