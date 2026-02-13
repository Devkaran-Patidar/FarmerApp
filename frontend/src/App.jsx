import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// css file
import "./App.css";

// layouts
import MainLayout from "./layouts/MainLayout";
import FarmerLayout from "./layouts/FarmerLayout";
import BuyerLayout from "./layouts/BuyerLayout";

// pages login / register
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile.jsx";

// farmer
import FarmerHome from "./pages/Farmer/farmerHome";
import AddProduct from "./pages/Farmer/AddProduct.jsx";

// buyer
import BuyerHome from "./pages/Buyer/BuyerHome";

// mainhome
import Mainhome from "./pages/mainhome/mainhome";
import About from "./pages/mainhome/About";
import Features from "./pages/mainhome/Features.jsx";
import Product from "./pages/mainhome/Product.jsx";
import Contact from "./pages/mainhome/Contact.jsx";

export default function App() {
  // const [islogin, setIslogin] =useState(false);

  // useEffect(()=>{
  //   if(localStorage.getItem("islogin")=== "true"){
  //     setIslogin(true)
  //   }
  // },[]);

  const [islogin, setIslogin] = useState(
    localStorage.getItem("islogin") === "true",
  );
  return (
    <div className="main_app">
      <BrowserRouter>
        <Routes>
                        {/* Main website */}

          <Route element={<MainLayout />}>
            <Route path="/" element={<Mainhome />} />
            <Route path="about" element={<About />} />
            <Route path="features" element={<Features />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />

            <Route  path="login"  element={<Login islogin={islogin} setIslogin={setIslogin} />} />
            <Route path="register"  element={<Register islogin={islogin} setIslogin={setIslogin} />} />
          </Route>

                          {/* farmer */}

          <Route path="farmerhome" element={<FarmerLayout islogin={islogin} setIslogin={setIslogin} />}>
            <Route index element={<FarmerHome />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="profile" element={<Profile />} />
          </Route>


                        {/* buyer */}

          <Route path="buyerhome" element={<BuyerLayout islogin={islogin} setIslogin={setIslogin} />}>
            <Route index element={<BuyerHome />}/>
            <Route path="profile" element={<Profile />} />
          </Route>


          <Route path="*" element={<center><h1 style={{ color: "red", fontSize: "3rem" }}>Error 404 <br />This Page is Not Found</h1></center> } /></Routes>

      </BrowserRouter>
    </div>
  );
}
