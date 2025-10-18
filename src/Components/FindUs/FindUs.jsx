import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-medium">Find Us on</h2>
      <div className="mt-5 space-y-2">
        <button className="text-accent btn w-full bg-base-100 justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="text-accent btn w-full bg-base-100 justify-start">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="text-accent btn w-full bg-base-100 justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
