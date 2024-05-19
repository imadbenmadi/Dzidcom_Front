import React from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "./AppContext";
function Default() {
    const { isAuth, userType } = useAppContext();
    const Navigate = useNavigate();
    
    if (!isAuth || !userType) Navigate("/Home");
    // Naviagting to Profiles
    else if (isAuth && userType == "client") {
        Navigate("/Client");
    } else if (isAuth && userType == "freelancer") {
        Navigate("/Freelancer");
    } else Navigate("/Home");

    return null;
}

export default Default;
