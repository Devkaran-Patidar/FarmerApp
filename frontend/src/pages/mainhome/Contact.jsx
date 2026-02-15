import "./Contact.css";
export default function Contact() {
    return (
      <>
      
<section className="contact-section">

    <div className="contact-container">

        {/* Left Info Section */}
        <div className  ="contact-info">
            <h1>Contact FarmDirect</h1>
            <p>
                Have questions about direct market access?  
                We are here to support farmers and buyers.
            </p>

            <div className="info-box">
                <i className ="fas fa-map-marker-alt"></i>
                <div>
                    <h4>Our Office</h4>
                    <p>Indore, Madhya Pradesh, India</p>
                </div>
            </div>

            <div className="info-box">
                <i class="fas fa-envelope"></i>
                <div>
                    <h4>Email Us</h4>
                    <p>support@farmdirect.com</p>
                </div>
            </div>

            <div className="info-box">
                <i className="fas fa-phone"></i>
                <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210</p>
                </div>
            </div>
        </div>

        {/* <!-- Right Form Section --> */}
        <div class="contact-form">
            <h2>Send Message</h2>

            <form>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Your Email" required/>
                <input type="text" placeholder="Subject" required/>
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>

    </div>

</section>
</>
    );
}   