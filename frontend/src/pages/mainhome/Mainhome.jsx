import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Product from "./Product";
import "./mainhome.css"
export default function Mainhome() {
  return (
    <div className="mainhome-container">
      <div className="border-2 bg-emerald-600 h-screen ">
          <h1 className="text-4xl font-bold border-2 border-green-600 ">
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