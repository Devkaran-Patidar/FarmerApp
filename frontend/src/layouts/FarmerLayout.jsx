import { Outlet,Navigate } from "react-router-dom";
import FarmerHeader from "../components/farmer/FarmerHeader";
import FarmerFooter from "../components/farmer/FarmerFooter";
import { Link } from "react-router-dom";

const FarmerLayout = ({islogin ,setIslogin}) => {
   const role = localStorage.getItem("role");
   const id = localStorage.getItem("userId");
   console.log("islogin:", islogin);
  console.log("role:", role);
  console.log("userId:",id)
  if (!islogin || role !== "farmer") {
    return <Navigate to="/" replace />;
  }
  return (
    // <>
    //   <main>
    //     <Outlet />
    //   </main>
    //   {/* <FarmerFooter /> */}
    // </>
    // ===============================
    <div >
      
       <FarmerHeader islogin={islogin} setIslogin={setIslogin}/>
      {/* Sidebar */} 
       <div style={{
        width: "220px",
        background: "#2e7d32",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        position: "fixed",
        top: "15vh",
        left: 0,
        maxHeight: "85vh",
      }}>
        <h2>Farmer Panel</h2>

      <Link to="profile">Profile</Link>
        <Link to="dashboard" style={{ display: "block", color: "white" }}>
          Dashboard
        </Link>
      </div>

      <main >
        <Outlet />
      </main>

    </div>

    // ====================
  );
};

export default FarmerLayout;


  