import React from "react";
import Navbar from "./global/Navbar";
import Sidebar from "./global/Sidebar";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row 2xl:container lg:mx-auto">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
