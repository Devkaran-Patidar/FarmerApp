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
          <h1 className="mainhome-heading">
          Fresh Farm <br />
          Product Delivered <br />
           to Your Home
        </h1>
        <div className="buttons">
            <button>  <a href="/login">Login</a>  </button>     
            <button>  <a href="/register">Register</a> </button>
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