import "./Footer.css";
import logo from "../../assets/logoname.webp";
export default function Footer() {
  return (
    <>

<footer class="footer">

    <div class="footer-container">

        {/* <!-- Brand Section --> */}
        <div class="footer-col">
            <h2 class="logo"><img src={logo} alt="logo" /></h2>
            <p>
                AgroMart is a mobile platform that provides direct market 
                access to farmers. We connect farmers with buyers and consumers 
                without middlemen — ensuring fair prices and better profits.
            </p>

            <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </div>

        {/* <!-- Quick Links --> */}
        <div class="footer-col">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        {/* <!-- Support --> */}
        <div class="footer-col">
            <h3>Support</h3>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </div>

      
        <div class="footer-col">
            <h3>Download App</h3>
            <p>Get the best direct market access experience for farmers.</p>

            <button class="app-btn">Download on App Store</button>
            <button class="app-btn">Get it on Google Play</button>
        </div>

    </div>

    <div class="footer-bottom">
        © 2026 AgroMart. All rights reserved.
    </div>

</footer>
    </>
  );
}
