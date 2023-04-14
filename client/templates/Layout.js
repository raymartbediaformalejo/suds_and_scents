import Footer from "../components/home/Footer/Footer";
import MainNavigation from "../components/home/MainNavigation/MainNavigation";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <Fragment>
      <MainNavigation styleMode={pathname === "/" ? "light" : "dark"} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
