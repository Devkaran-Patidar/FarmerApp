import { Outlet } from "react-router-dom";
import MainHeader from "../components/headers/MainHeader";


const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
