import React from "react";
import { useAppContext } from "../../../AppContext";
import Alert_Complete_Profile from "../Alerts/Alert_Complete_Profile";
import Hero from "./Hero";
import PersonalInformations from "./PersonalInformations";
import Reviews from "./Reviews";
function Client_Profile() {
    const { show_Alert_completeProfile } = useAppContext();
    return (
        <div>
            {show_Alert_completeProfile && <Alert_Complete_Profile />}
            <Hero />
            <PersonalInformations />
            <Reviews />
        </div>
    );
}

export default Client_Profile;
