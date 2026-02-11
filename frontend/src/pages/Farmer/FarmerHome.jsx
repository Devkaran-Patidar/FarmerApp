import { useEffect } from 'react'
import './FarmerHome.css'
import { useNavigate } from 'react-router-dom'

export default function FarmerHome({islogin,setIslogin}){
    // let navigate = useNavigate();
    // useEffect(()=>{
    //     if(!islogin){
    //         navigate("/")
    //     }
    // }, [islogin, navigate]);
    
    // console.log(islogin)
    // console.log(localStorage.getItem("islogin"))

    return(
        <main>
            <h1>Farmer home</h1>
        </main>
    )
}
