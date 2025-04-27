import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const MainRoutes = () => {
  return (
    <div className="max-w-full">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainRoutes;
