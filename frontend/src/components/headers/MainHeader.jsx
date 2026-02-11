
import "./MainHeader.css"
import logo from '../../assets/logoName.webp'
import Home from "../../pages/Home"
export default function Header(){
    return(

          <header>
        <div className="logo">
           <a href="#home"><img src={logo} alt="logo" /></a>
        </div>

        <nav>
            <a href="#About">About</a>
            <a href="#features">Features</a>
            <a href="#Product">Product</a>
            <a href="#contact">Contact</a>
        </nav> 

    </header>
    )
}