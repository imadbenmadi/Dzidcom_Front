import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
function Complete_Profile() {
    const Navigate = useNavigate();
    return (
        <div className=" w-full h-10 bg-red_error text-white font-semibold text-2xl">
            Please Complete your Profile ,Go to{" "}
            <span
                className=" underline "
                onClick={() => {
                    Navigate("/Freelancer/Complete_Profile");
                }}
            >
                Complete Profile page
            </span>{" "}
            <span className="text-2xl text-white font-semibold">
                {" "}
                <IoClose />{" "}
            </span>
        </div>
    );
}

export default Complete_Profile;
