import React, { useState } from "react";
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { userLogin } = use(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    userLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        Navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
        <h1 className="text-2xl font-semibold text-center">
          Login your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <span className="text-red-500">{error}</span>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-center text-xsm">
            Don't Have An Account?{" "}
            <Link to="/auth/register" className="text-secondary link-hover">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
