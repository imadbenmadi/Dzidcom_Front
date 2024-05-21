import React from "react";
import { useAppContext } from "../../../AppContext";
import Alert_Complete_Profile from "../Alerts/Alert_Complete_Profile";
import Hero from "./Hero";
import Applications from "./Applications";
import PersonalInformations from "./PersonalInformations";
function freelancer_Profile() {
    const { show_Alert_completeProfile } = useAppContext();
    return (
        <div>
            {show_Alert_completeProfile && <Alert_Complete_Profile />}
            <Hero />
            <Applications />
            <PersonalInformations />
        </div>
    );
}

export default freelancer_Profile;
