import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar2 from "../Components/Navbar2/Navbar2";
import LeftAside from "../Components/LeftAside/LeftAside";
import RightAside from "../Components/RightAside/RightAside";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar2></Navbar2>
        </nav>
      </header>
      <main className="grid grid-cols-12 mt-10 gap-6">
        <aside className="col-span-3 sticky h-fit top-2">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky h-fit top-2">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
