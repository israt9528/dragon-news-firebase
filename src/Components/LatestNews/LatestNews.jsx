import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-4 my-8 font-medium">
      <p className="bg-secondary px-3 py-2 text-white">Latest</p>
      <Marquee className="" pauseOnHover={true}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsam voluptas reiciendis quisquam non eveniet neque accusamus officia
          quidem? Reprehenderit.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
