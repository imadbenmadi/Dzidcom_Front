import React from "react";
import { useAppContext } from "../../AppContext";
import Alert_Complete_Profile from "./Alerts/Alert_Complete_Profile";
function freelancer_Profile() {
    const { show_Alert_completeProfile } = useAppContext();
    return (
        <div>
            <div>
                {show_Alert_completeProfile && <Alert_Complete_Profile />}
            </div>
        </div>
    );
}

export default freelancer_Profile;
