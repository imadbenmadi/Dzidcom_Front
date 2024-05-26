import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useAppContext } from "../../../AppContext";
function Alert_Complete_Profile() {
    const { set_show_Alert_completeProfile, show_Alert_completeProfile } =
        useAppContext();
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    return show_Alert_completeProfile ? (
        <div
            className="w-full h-10 bg-perpol_v text-white text-lg text-center flex  select-none
        items-center justify-center gap-12"
        >
            <div>
                Please complete your profile to unlock full platform access.{" "}
                <span
                    className="underline cursor-pointer"
                    onClick={() => {
                        navigate("/Client/Complete_Profile");
                    }}
                >
                    Complete Profile page
                </span>{" "}
            </div>
            <span
                className="text-2xl text-white font-semibold cursor-pointer"
                onClick={() => {
                    set_show_Alert_completeProfile(false);
                }}
            >
                <IoClose />
            </span>
        </div>
    ) : null;
}

export default Alert_Complete_Profile;
