import Hero1 from "../../../../public/Home/Hero/Hero1.png";
import Hero2 from "../../../../public/Home/Hero/Hero2.png";
import Hero3 from "../../../../public/Home/Hero/Hero3.png";
import iconHome from "../../../../public/Home/Hero/icon.png";

function HeroRight() {
  return (
    <div className="w-full md:mt-10 flex flex-col ">
      <div className="flex gap-2 float-right items-center relative w-[90%] mb-4">
        <img
          src={iconHome}
          className="lg:w-16  max-md:w-12  h-fit  z-10 md:w-12 max-md:-left-10   -left-12 -bottom-5 self-end absolute"
          alt=""
        />
        <img
          src={Hero1}
          alt=""
          className=" md:h-36   max-md:w-56 mr-0 max-md:h-20 z-20 h-46 w-full "
        />
      </div>
      <div className="flex   items-center gap-5 w-full  mt-5">
        <img
          src={Hero2}
          className="lg:h-36   lg:w-[50%] md:w-[50%] max-md:h-20  max-md:w-28 "
          alt=""
        />
        <img
          src={Hero3}
          className="h-56 md:w-[50%] md:h-42  max-md:h-28 max-md:w-28"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroRight;
