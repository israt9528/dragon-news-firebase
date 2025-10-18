import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img src={logo} alt="" />
      <h2 className="text-accent mt-5 mb-2">
        Journalism Without Fear or Favour
      </h2>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}{" "}
      </p>
    </div>
  );
};

export default Navbar;
