import React from "react";
import HeroLeft from "./Hero/HeroLeft";
import HeroRight from "./Hero/HeroRight";

function Hero() {
  return (
    <div className="flex lg:min-h-fit   min-h-screen justify-between w-full max-md:flex-col mt-10 h-full items-center mx-auto max-w-[1200px]">
      <div className="md:w-[50%] lg:w-[55%] h-fit">
        <HeroLeft />
      </div>
      <div className="md:w-[45%]   lg:w-[40%] p-5 h-fit">
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
