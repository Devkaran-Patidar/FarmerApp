import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="main_home_page">
      <section id="home">
        <h1>
          Fresh Farm Product <br />
          Delivered to Your Home
        </h1>

        <div className="buttons">
          <button>
            <Link to="/login">Login</Link>
          </button>

          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </section>
       <section id="About">
         <center>About</center>
      </section>

      <section id="features">
         <center>Features</center>
      </section>
        <section id="Product">
         <center>Product</center>
      </section>
           
           
      <section id="contact">
            <center>contact</center>
      </section>

      <footer>
        <h1>footer</h1>
      </footer>
    </main>
  );
}
