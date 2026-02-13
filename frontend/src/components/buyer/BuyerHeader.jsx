import { useNavigate } from "react-router-dom";

export default function BuyerHeader({islogin,setIslogin}){
   let navigate = useNavigate();
    return(
        <header>
            <h1>Buyer</h1>
             <button onClick={()=>{
                setIslogin(false);
                localStorage.removeItem("islogin")
                navigate("/")
            }}>logout</button>

            <Link to="/buyerhome/profile">Profile</Link>

        </header>
    )
}