
import "./MainHeader.css"
import logo from '../../assets/logoName.webp'
import { Link } from "react-router-dom";
export default function Header(){
    return(

          <header>
        <div className="logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>    
        </div>

        <nav>
            {/* <a href="#About">About</a>
            <a href="#features">Features</a>
            <a href="#Product">Product</a>
            <a href="#contact">Contact</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>   
        </nav> 

    </header>
    )
}