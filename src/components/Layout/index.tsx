import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <Fragment>
      <Header key={"header"} />
      <Outlet />
      <Footer key={"footer"} />
    </Fragment>
  );
};

export default Layout;
