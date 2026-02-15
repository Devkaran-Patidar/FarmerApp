import "./Product.css";

export default function Product() {
  return (
    <section className="product-section">
      <div className="product-container">
        <div className="product-text">
          <h2>AgroMart Mobile App</h2>
          <p>
            AgroMart connects farmers directly with buyers through a powerful
            mobile platform. Sell crops without middlemen and increase your profit.
          </p>

          <ul>
            <li>✔ Direct farmer-to-buyer connection</li>
            <li>✔ Transparent pricing system</li>
            <li>✔ Real-time order tracking</li>
            <li>✔ Secure online payments</li>
          </ul>
        </div>

        <div className="product-image">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8a6f2a1a6f"
            alt="Mobile app"
          />
        </div>
      </div>
    </section>
  );
}
