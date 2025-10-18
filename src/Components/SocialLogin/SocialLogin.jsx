import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Login With</h1>
      <div className="mt-5">
        <button className="btn btn-outline w-full mb-3 btn-secondary">
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
