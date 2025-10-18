import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";

const QZone = () => {
  return (
    <div className="mt-5 bg-base-200 rounded">
      <div className="pt-3 pl-3">
        <h2 className="text-xl font-medium">Q-Zone</h2>
      </div>
      <div className="my-4 space-y-3">
        <img className="mx-auto" src={swimmingImg} alt="" />
        <img className="mx-auto" src={classImg} alt="" />
        <img className="mx-auto" src={playImg} alt="" />
      </div>
      <div>
        <img className="w-full" src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
