import { IoIosArrowDown } from "react-icons/io";
import Arrow from "../../../../public/Home/Hero/Arrow.png";
import search from "../../../../public/Home/Hero/search.png";
import { useState } from "react";
function HeroLeft() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col px-3 lg:px-16 pb-10 h-fit bg-white max-md:px-5">
      <div className="flex   w-fit  max-md:ml-0 max-md:w-full">
        <div className="self-stretch max-lg:text-sm  my-auto text-lg font-medium text-zinc-800 max-md:mt-10">
          Be a freelancer
        </div>
        <div className="flex flex-col ml-2  max-lg:text-xs max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={Arrow}
            className="grow shrink-0 max-w-full aspect-[1.61] w-[179px] max-md:mt-3.5"
          />
        </div>
        <div className="flex flex-col ml-2  max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e082bccd5f644e6d54ddbaf5433c00520a351d7e5f2451c46486b49559a3ee0?"
            className="grow shrink-0 max-w-full aspect-[1.64] w-[186px] max-md:mt-3"
          />
        </div>
      </div>
      <div className="flex   max-sm:flex-col max-md:justify-start max-md:items-start  w-full  mt-5 items-center gap-1">
        {/* <div className="w-fit h-11  justify-center items-center gap-2 inline-flex"> */}
        <div className="flex">
          <div className="text-zinc-800  w-fit mx-1 px-2 py-3 bg-blue-100 rounded-3xl   lg:text-sm md:text-xs max-md:text-[10px]  font-normal font-['Poppins']">
            Graphic designer
          </div>

          <div className="text-zinc-800 max-md:text-[10px] w-fit text-center mx-1 px-2 py-3 bg-blue-100 rounded-3xl lg:text-sm md:text-xs  font-normal font-['Poppins']">
            Ceo / SEO
          </div>
        </div>

        <div className="text-zinc-800 max-md:text-[10px] mx-1 px-2 py-3 bg-blue-100 rounded-3xl w-fit lg:text-sm md:text-xs  font-normal font-['Poppins']">
          Content creation
        </div>
      </div>
      <div className="mt-2 h-fit md:text-4xl max-md:text-5xl max-sm:text-2xl  leading-[75px] text-zinc-800 max-md:max-w-full  max-md:leading-[70px] max-sm:leading-[40px]">
        Welcome to our Freelance Website!
      </div>
      <div className="mt-2 lg:text-xl md:text-sm text-zinc-800 max-md:max-w-full">
        Find the perfect freelancers or get hired for your next project.
      </div>
      <div className="flex relative gap-5 justify-between  lg:pl-6 max-md:pl-2 mt-8 w-full text-base whitespace-nowrap border border-solid border-zinc-300 rounded-[48px] max-md:flex-wrap  max-md:max-w-full">
        <div className="flex  max-md:w-[70%]  my-auto text-zinc-700">
          <img src={search} className="shrink-0 w-6 py-2  aspect-square" />
          <input type="text" placeholder="Search" className="py-2 w-full " />
        </div>

        <div
          onClick={toggleDropdown}
          className="flex  relative  cursor-pointer p-2 gap-2 justify-center md:p-4 border border-solid border-zinc-300 rounded-[48px] text-zinc-800"
        >
          <div className="flex relative  justify-center   rounded-[48px] text-zinc-800">
            <div className="max-md:hidden">Companies</div>

            <IoIosArrowDown
              style={{
                color: "#1A202C",
                fontSize: "1.5rem",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: isOpen ? "block" : "hidden",
            transform: isOpen ? "scale(1)" : "scale(0)",
            transition: "transform 0.3s",
          }}
          className="absolute duration-500  z-30 -left-1  top-16 w-full bg-white rounded-md shadow-lg"
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Company A
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Company B
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Company C
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Company D
          </a>
        </div>
      </div>
      {/* <div
        onClick={toggleDropdown}
        className="flex md:hidden relative cursor-pointer gap-2 justify-center mt-2 p-2 border border-solid border-zinc-300 rounded-[48px] text-zinc-800"
      >
        <div className="flex  relative  gap-2 justify-center du  rounded-[48px] text-zinc-800">
          <div>Companies</div>
          <IoIosArrowDown
            style={{
              color: "#1A202C",
              fontSize: "1.5rem",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </div> */}

      {/* <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-8 max-md:max-w-full">
              <div className="max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  
                </div>
              </div>
              <div className="flex gap-5 justify-center pr-20 mt-8 text-sm text-zinc-800 max-md:flex-wrap max-md:pr-5">
                <div className=" px-2 w-fit py-3  bg-blue-100 rounded-[48px] max-md:px-5">
                  Graphic designer
                </div>
                <div className="justify-center px-6 py-3 bg-blue-100 rounded-[48px] max-md:px-5">
                  Ceo / SEO
                </div>
                <div className="justify-center px-6 py-3 bg-blue-100 rounded-[48px] max-md:px-5">
                  Content creation
                </div>
              </div>
         
          
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroLeft;
