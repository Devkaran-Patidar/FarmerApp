import { useNavigate } from "react-router-dom"

export default function FarmerHeader({islogin,setIslogin}){
    let navigate = useNavigate();
    return(
        <header>
            <h1>farmer header</h1>
            <button onClick={()=>{
                setIslogin(false);
                localStorage.removeItem("islogin")
                navigate("/")
            }}>logout</button>
        </header>
    )
}