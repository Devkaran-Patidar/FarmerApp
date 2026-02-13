import { Outlet } from "react-router-dom";
import BuyerHeader from "../components/buyer/BuyerHeader";
import BuyerFooter from "../components/buyer/BuyerFooter";
import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";
const BuyerLayout = ({islogin ,setIslogin}) => {
  const role = localStorage.getItem("role");
     let navigate = useNavigate();
  if (!islogin || role !== "buyer") {
    return <Navigate to="/" replace />;
  }


  // change Navigate function
  return (
    <>
      <BuyerHeader islogin={islogin} setIslogin={setIslogin} />
      <main>
        <Outlet />
      </main>
      <BuyerFooter />
    </>
  );
};

export default  BuyerLayout;
