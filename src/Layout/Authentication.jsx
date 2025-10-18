import React from "react";
import Navbar2 from "../Components/Navbar2/Navbar2";
import { Outlet } from "react-router";

const Authentication = () => {
  return (
    <div className=" bg-base-200">
      <header className="w-11/12 mx-auto py-5">
        <Navbar2></Navbar2>
      </header>
      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Authentication;
