import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
export default function FarmerHeader({islogin,setIslogin}){
    let navigate = useNavigate();
    return(
        <header>
            <h1>Farmer</h1>
            <Link to="/farmerhome/addproduct">add product</Link>
            <button onClick={()=>{
                setIslogin(false);
                localStorage.removeItem("islogin")
                navigate("/")
            }}>logout</button>

            <Link to="/farmerhome/profile">Profile</Link>
        </header>
    )
}