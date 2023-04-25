import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-primary w-full h-[450px] md:h-[600px] lg:h-[700px] bg-no-repeat bg-bottom bg-cover"
      style={{backgroundImage: "url(../../images/banner.jfif)"}}
    />
  );
};

export default Banner;
