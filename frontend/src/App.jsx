import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// layouts
import MainLayout from "./layouts/MainLayout";
import FarmerLayout from "./layouts/FarmerLayout";
import BuyerLayout from "./layouts/BuyerLayout";

// css file
import "./App.css";

// pages login / register
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// farmer
import FarmerHome from "./pages/Farmer/farmerHome";


// buyer
import BuyerHome from "./pages/Buyer/BuyerHome";


export default function App() {
  const [islogin, setIslogin] =useState(false);

  useEffect(()=>{
    if(localStorage.getItem("islogin")=== "true"){
      setIslogin(true)
    }
  },[]);

  //  const [islogin, setIslogin] = useState(
  //   localStorage.getItem("islogin") === "true"
  // );
  return (
    <div className="main_app">
      <BrowserRouter>
        <Routes>

          {/* Main website */}
          <Route element={<MainLayout />}>
            <Route path="" element={<Home />} />
            
            <Route path="login" element={<Login  islogin ={islogin} setIslogin={setIslogin} />} />
            <Route path="register" element={<Register  islogin ={islogin}  setIslogin={setIslogin} />} />
          </Route>

          {/* farmer */}
          <Route element={<FarmerLayout  islogin ={islogin}  setIslogin={setIslogin}/>}>
            <Route path="farmerhome" element={<FarmerHome  islogin ={islogin}  setIslogin={setIslogin} />} />
          </Route>

          {/* buyer */}
          <Route element={<BuyerLayout islogin={islogin} setIslogin={setIslogin} />}>
            <Route path="buyerhome" element={<BuyerHome islogin ={islogin}  setIslogin={setIslogin} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
