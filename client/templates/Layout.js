import Footer from "../components/home/Footer/Footer";
import MainNavigation from "../components/home/MainNavigation/MainNavigation";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <Fragment>
      <MainNavigation
        styleMode={pathname === "/" ? "light" : "dark"}
        backgroundSColorAcc={
          pathname === "/login" || pathname === "/signup"
            ? "background-white"
            : "transparent"
        }
      />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
