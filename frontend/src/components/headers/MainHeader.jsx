
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
            <Link to="/about">about</Link>
            <Link to="/features">features</Link>
            <Link to="/product">product</Link>
            <Link to="/contact">contact</Link>   
        </nav> 

    </header>
    )
}