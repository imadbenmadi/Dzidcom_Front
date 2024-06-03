import React from "react";
import Alert_Complete_Profile from "./Alerts/Alert_Complete_Profile";
import { useAppContext } from "../../AppContext";

function Freelancer_Applications() {
    const { show_Alert_completeProfile } = useAppContext();

    return (
        <div>
            <div>
                {show_Alert_completeProfile && <Alert_Complete_Profile />}
            </div>
        </div>
    );
}

export default Freelancer_Applications;
