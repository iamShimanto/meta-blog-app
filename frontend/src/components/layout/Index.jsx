
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
