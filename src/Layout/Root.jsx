import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  const location = useLocation();
  return (
    <div className="font-lato">
      <Navbar></Navbar>
      <Outlet></Outlet>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer></Footer>
      )}
      <Toaster />
    </div>
  );
};

export default Root;
