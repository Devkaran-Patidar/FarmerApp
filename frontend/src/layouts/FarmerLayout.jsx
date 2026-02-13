import { Outlet,Navigate } from "react-router-dom";
import FarmerHeader from "../components/farmer/FarmerHeader";
import FarmerFooter from "../components/farmer/FarmerFooter";


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
    <>
      <FarmerHeader islogin={islogin} setIslogin={setIslogin}/>
      <main>
        <Outlet />
      </main>
      {/* <FarmerFooter /> */}
    </>
  );
};

export default FarmerLayout;
