import React from "react";
import { useAppContext } from "../../../AppContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import user_default from "../../../../public/Profile/user_default2.png";
import { useNavigate } from "react-router";

function Hero() {
    const Navigate = useNavigate();
    const { user } = useAppContext();
    return (
        <div className="flex flex-row  items-center justify-around mt-8">
            <div className="  flex  justify-center max-w-[350px] gap-6 md:gap-12">
                {user?.profile_pic_link ? (
                    <img
                        src={"http://localhost:3000/" + user.profile_pic_link}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = user_default;
                        }}
                        alt=""
                        className=" w-[150px] h-[150px] rounded-full"
                    />
                ) : (
                    <img src={user_default} alt="" className=" w-32" />
                )}
                <div className=" flex items-center justify-center flex-col mb-6">
                    <div className=" text-xl font-semibold mb-4 text-gray_v">
                        <span>{user?.firstName}</span>{" "}
                        <span>{user?.lastName}</span>
                    </div>
                    {/* <div className=" text-yellow-400 flex w-full text-xl gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div> */}
                    <div className=" flex  gap-4 w-full ">
                        {user?.Rate ? (
                            <>
                                <div className=" text-yellow-400 flex gap-1">
                                    {[...Array(Math.floor(user.Rate))].map(
                                        (_, index) => (
                                            <FaStar key={index} />
                                        )
                                    )}
                                    {user.Rate % 1 !== 0 && <FaStarHalf />}
                                </div>
                            </>
                        ) : (
                            <div className=" text-sm">No ratings yet</div>
                        )}
                    </div>
                    <div
                        className=" block  md:hidden  text-white font-semibold bg-perpol_v py-2 px-4  text-sm mt-4
                                rounded-md cursor-pointer "
                        onClick={() => {
                            // window.location.href = "/Freelancer/Jobs";
                            Navigate("/Freelancer/Jobs");
                        }}
                    >
                        See work offers
                    </div>
                </div>
            </div>
            <div
                className=" hidden md:block text-white font-semibold bg-perpol_v py-2 px-4  text-xl
            rounded-md cursor-pointer "
                onClick={() => {
                    // window.location.href = "/Freelancer/Jobs";
                    Navigate("/Freelancer/Jobs");
                }}
            >
                See work offers
            </div>
        </div>
    );
}

export default Hero;
