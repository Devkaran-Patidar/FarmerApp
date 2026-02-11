import { Outlet,Navigate } from "react-router-dom";
import FarmerHeader from "../components/farmer/FarmerHeader";
import FarmerFooter from "../components/farmer/FarmerFooter";


const FarmerLayout = ({islogin ,setIslogin}) => {
   const role = localStorage.getItem("role");

  if (!islogin || role !== "farmer") {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <FarmerHeader islogin={islogin} setIslogin={setIslogin}/>
      <main>
        <Outlet />
      </main>
      <FarmerFooter />
    </>
  );
};

export default FarmerLayout;
