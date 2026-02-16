import axios from "axios";
import React,{useEffect,useState} from "react";

import "./Contact.css";
export default function Contact() {

      async  function handleContact(e) {
            
            e.preventDefault();

            let data = {
                name : e.target.name.value,
                email : e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.msg.value   
               };

              console.log(data)

             await axios.post("http://127.0.0.1:8000/api/contact/",data)
               .then(response =>{
                alert("Message Send Successfully !");
                console.log(response.data)
                 e.target.reset();
               })
               .catch(error =>{
                console.error("error sending data : ", error);
               });
        }



      
    return (
      <>
      
<section className="contact-section">

    <div className="contact-container">

        {/* Left Info Section */}
        <div className  ="contact-info">
            <h1>Contact AgroMart</h1>
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
                <i className="fas fa-envelope"></i>
                <div>
                    <h4>Email Us</h4>
                    <p>support@agromart.com</p>
                </div>
            </div>

            <div className="info-box">
                <i className="fas fa-phone"></i>
                <div>
                    <h4>Call Us</h4>
                    <p>+91 99911 4410</p>
                </div>
            </div>
        </div>

        {/* <!-- Right Form Section --> */}
        <div className="contact-form">
            <h2>Send Message</h2>

            <form onSubmit={handleContact}>
                <input type="text" placeholder="Your Name" name="name" required/>
                <input type="email" placeholder="Your Email" name="email" required/>
                <input type="text" placeholder="Subject" name="subject" required/>
                <textarea rows="5" placeholder="Your Message" name="msg" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>

    </div>

</section>
</>
    );
}   