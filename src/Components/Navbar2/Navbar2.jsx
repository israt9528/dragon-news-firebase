import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Context/AuthContext";

const Navbar2 = () => {
  const { user, userLogout } = use(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        alert("You logged out successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-4">
        {user ? (
          <img className="w-12" src={user.photoURL} alt="" />
        ) : (
          <img src={userImg} alt="" />
        )}
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-5">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
