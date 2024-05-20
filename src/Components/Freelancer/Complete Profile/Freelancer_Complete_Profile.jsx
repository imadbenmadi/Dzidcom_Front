import React from "react";
import { useAppContext } from "../../../AppContext";
import user_default from "../../../../public/Profile/user_default.png";
import Step_1 from "./Step_1";
import Step_2 from "./Step_2";
import Step_3 from "./Step_3";
import Step_4 from "./Step_4";
function Freelancer_Complete_Profile() {
    const { isProfileCompleted, user } = useAppContext();
    return (
        <div>
            {/* {!user.telephone || !user.nationalCardNumber || !user.JobTitle ? (*/}
            <Step_1 />
            {/* ) : !user.about || !user.Skills ? ( */}
            {/* <Step_2 /> */}
            {/* ) : (
                <div>Done</div>
            )} */}
        </div>
    );
}

export default Freelancer_Complete_Profile;
