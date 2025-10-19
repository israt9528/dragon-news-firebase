import React from "react";
import { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const SocialLogin = () => {
  const { loginWithGoogle, setUser } = use(AuthContext);

  const handleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        alert("Logged In with Google!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1 className="font-bold text-xl">Login With</h1>
      <div className="mt-5">
        <button
          onClick={handleLogin}
          className="btn btn-outline w-full mb-3 btn-secondary"
        >
          <FaGoogle size={24} /> Login with Google
        </button>
        <button className="btn btn-outline w-full mb-3 btn-primary">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
