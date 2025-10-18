import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { createUser, setUser, user } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
        <h1 className="text-2xl font-semibold text-center">
          Register your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your photo url"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your Password"
              />
              <label className="label mt-3">
                <input type="checkbox" className="checkbox" />
                Accept Terms & Conditions
              </label>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className="text-center text-xsm">
            Already Have An Account?{" "}
            <Link to="/auth/login" className="text-secondary link-hover">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
