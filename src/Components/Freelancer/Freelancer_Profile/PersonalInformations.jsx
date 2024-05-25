import React from "react";
import { useAppContext } from "../../../AppContext";
import EditeIcon from "../../../../public/Profile/EditeIcon.png";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function PersonalInformations() {
  const Navigate = useNavigate();
  const { user } = useAppContext();
  return (
    <div className="  py-16 px-6 md:px-0 max-w-[750px] mx-auto  flex flex-col  gap-16 break-all ">
      <div className=" text-3xl text-gray_v font-semibold flex items-center justify-between ">
        {user?.JobTitle ? user.JobTitle : "Job Title"}
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_1";
            Navigate("/Freelancer/Complete_Profile/Step_1");
          }}
        />{" "}
      </div>
      <div className=" text-lg text-gray_v font-semibold flex items-center justify-between ">
        <div className=" flex items-center justify-center gap-6">
          <div className=" text-xl underline font-semibold">Email :</div>
          <div>{user?.email ? user.email : "none"}</div>
        </div>
        {/* <img src={EditeIcon} alt="" className=" w-8 cursor-pointer" />{" "} */}
      </div>
      <div className=" text-lg text-gray_v font-semibold flex items-center justify-between ">
        <div className=" flex items-center justify-center gap-6">
          <div className=" text-xl underline font-semibold">About :</div>
          <div>{user?.about ? user.about : "none"}</div>
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_2";
            Navigate("/Freelancer/Complete_Profile/Step_2");
          }}
        />{" "}
      </div>
      <div className=" text-lg text-gray_v font-semibold flex items-center justify-between ">
        <div className=" flex items-center justify-center gap-6">
          <div className=" text-xl underline font-semibold">Phone Number :</div>
          <div>{user?.telephone ? user.telephone : "none"}</div>
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_1";
            Navigate("/Freelancer/Complete_Profile/Step_1");
          }}
        />{" "}
      </div>

      <div className=" font-semibold text-gray_v text-lg flex items-center justify-between">
        <div className="flex  items-center justify-center gap-6">
          <div className=" text-xl underline font-semibold  ">
            {" "}
            National Card Number{"    "}
          </div>
          {user?.nationalCardNumber ? user.nationalCardNumber : "none"}{" "}
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_1";
            Navigate("/Freelancer/Complete_Profile/Step_1");
          }}
        />{" "}
      </div>
      <div className=" flex items-start justify-between ">
        <div className="flex flex-col gap-6  ">
          <div className="  text-xl underline font-semibold text-gray_v">
            Skills :
          </div>
          <div className="flex flex-wrap  gap-6">
            {user?.Skills ? (
              user.Skills.map((skill) => (
                <div key={skill.id}>
                  <div
                    className=" bg-perpol_v text-xl w-fit py-1
                                                     px-2 text-white rounded-lg "
                  >
                    {skill.skill}
                  </div>
                </div>
              ))
            ) : (
              <p className=" text-sm font-semibold  text-gray_v">
                No skills found
              </p>
            )}
          </div>
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_2";
            Navigate("/Freelancer/Complete_Profile/Step_2");
          }}
        />{" "}
      </div>
      <div className=" text-lg text-gray_v font-semibold flex items-center justify-between ">
        <div className=" flex items-center justify-center gap-6">
          <div className=" text-xl underline font-semibold">
            Portfolio Website :
          </div>
          <div>
            {user?.portfolioWebsite ? (
              <a
                className=" text-purple-400 underline"
                href={user.portfolioWebsite}
              >
                {user.portfolioWebsite}
              </a>
            ) : (
              "none"
            )}
          </div>
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_4";
            Navigate("/Freelancer/Complete_Profile/Step_4");
          }}
        />{" "}
      </div>
      <div className=" flex items-start justify-between ">
        <div className="flex flex-col gap-4 w-full  ">
          <div className="  text-xl underline font-semibold text-gray_v">
            Portfolio :
          </div>
          <div className="flex flex-wrap  gap-6">
            {user.PortfolioItems.lenght ? (
              user.PortfolioItems.map((item) => (
                <div key={item.id}>
                  <div
                    className=" bg-perpol_v text-xl w-fit py-1
                                        px-2 text-white rounded-lg "
                  >
                    {item.title}
                  </div>
                </div>
              ))
            ) : (
              <div
                className=" flex items-center justify-center w-full gap-2 text-xl text-center text-perpol_v font-semibold cursor-pointer"
                onClick={() => {
                  // window.location.href =
                  //     "/Freelancer/Complete_Profile/Step_3";
                  Navigate("/Freelancer/Complete_Profile/Step_3");
                }}
              >
                <IoIosAddCircle />
                add item
              </div>
            )}
          </div>
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_3";
            Navigate("/Freelancer/Complete_Profile/Step_3");
          }}
        />{" "}
      </div>
      <div className=" flex justify-between">
        <div className=" flex gap-6">
          {user?.facebook_Link && (
            <FaFacebook
              className=" text-blue-500 text-5xl cursor-pointer  "
              onClick={() => {
                window.location.href = user.facebook_Link;
              }}
            />
          )}
          {user?.instgram_Link && (
            <FaInstagram
              className=" text-red-500 text-5xl cursor-pointer  "
              onClick={() => {
                window.location.href = user.instagram_Link;
              }}
            />
          )}
          {user?.linkedIn_Link && (
            <FaLinkedin
              className=" text-blue-500 text-5xl cursor-pointer  "
              onClick={() => {
                window.location.href = user.linkedin_Link;
              }}
            />
          )}
        </div>
        <img
          src={EditeIcon}
          alt=""
          className=" w-8 h-8 cursor-pointer"
          onClick={() => {
            // window.location.href =
            //     "/Freelancer/Complete_Profile/Step_4";
            Navigate("/Freelancer/Complete_Profile/Step_4");
          }}
        />{" "}
      </div>

      <div className=" w-full bg-gray_white h-[1px]"> </div>
      <div>
        <div className="flex flex-col gap-4 w-full  ">
          <div className=" flex items-center  gap-3  text-2xl  font-semibold text-gray_v">
            <p className=" underline">Reviews : </p>
            <div>
              {user?.Rate ? (
                <>
                  {user.Rate}
                  {[...Array(Math.floor(user.Rate))].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                  {user.Rate % 1 !== 0 && <FaStarHalf />}
                </>
              ) : (
                <p className=" text-lg">No ratings yet</p>
              )}
            </div>
          </div>
          {/* <div className=" text-center text-md font-semibold text-gray_v pt-6">
                        {" "}
                        No Rattings yet
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default PersonalInformations;
