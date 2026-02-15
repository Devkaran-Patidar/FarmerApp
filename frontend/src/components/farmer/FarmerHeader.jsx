import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
export default function FarmerHeader({islogin,setIslogin}){
    let navigate = useNavigate();
    return(
        <header style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"10px 20px",
            backgroundColor:"#2e7d32",
            color:"white",
            position:"sticky",
            top:0,
            zIndex:10,
            width:"100w",
            height: "10vh",
        }}>
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