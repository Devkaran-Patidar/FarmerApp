import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Product from "./Product";
import "./mainhome.css"
export default function Mainhome() {
  return (
    <div className="mainhome-container">
      <div className=" mainhome-hero">
        <div className="hero-content">
            <h1 className="mainhome-heading">
          Fresh Farm <br />
          Product Delivered <br />
           to Your Home
        </h1> 
        </div>
        
        <div className="buttons">
              <button className="btn"><a href="/login">Login Here !</a></button>      
             <button className="btn"> <a href="/register">Register Now !</a></button>
        </div> 
       
      </div>
    
      <div className="allpages">
      
        <Product />
        <Features />  
        <About />
        <Contact />
        <Footer />
      </div>


    </div>
    );
}