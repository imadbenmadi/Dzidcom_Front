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
            {!user.telephone || !user.nationalCardNumber || !user.JobTitle ? (
                <Step_1 />
            ) : (
                <div>
                    <div className=" flex items-center justify-start gap-12 w-full ">
                        <div>
                            <img
                                src={user_default}
                                alt=""
                                className=" w-[120px] cursor-pointer"
                            />
                        </div>
                        <div>
                            <div className=" font-semibold text-gray_v">
                                Profil 100% Completed ✅
                            </div>
                        </div>
                    </div>
                    {/* Progress*/}
                    <div className=" flex items-center justify-start gap-5">
                        <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                        <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                        <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                        <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Freelancer_Complete_Profile;
