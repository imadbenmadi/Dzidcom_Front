import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import axios from "axios";
import { Outlet } from "react-router";
import NavBar from "./NavBar/NavBar";
import user_image from "../../../public/user2.png";
import message_icon from "../../../public/Profile/message.png";
import notification_icon from "../../../public/Profile/Notification.png";
import user_default from "../../../public/Profile/user_default.png";
import Logo from "../../../public/Logo.png";
import Project_Accpted from "../../../public/Project/Project_Accpted.png";
import Project_Waiting from "../../../public/Project/Project_Waiting.png";
import Project_Done from "../../../public/Project/Project_Done.png";
import Project_Waiting2 from "../../../public/Project/Project_Waiting2.png";
import Project_Rejected from "../../../public/Project/Project_Rejected.png";
import Alert_icon from "../../../public/Project/Alert.png";
import EditeIcon from "../../../public/Profile/EditeIcon.png";
function Freelancer() {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isProfileCompleted, setisProfileCompleted] = useState(false);
    const {
        userId,
        userType,
        isAuth,
        set_user,
        user,
        set_Profile_Completed,
        show_Alert_completeProfile,
        set_show_Alert_completeProfile,
    } = useAppContext();
    if (!isAuth || !userId) {
        // window.location.href = "/Login";
        Navigate("/Login");
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/Freelancers/${userId}/Profile`,
                    {
                        withCredentials: true,
                        // validateStatus: () => true,
                    }
                );
                console.log(
                    "response from get user Profile :",
                    response.data.User
                );
                if (response.status == 200) {
                    set_user(response.data.User);
                } else {
                    set_Auth(false);
                    // window.location.href = "/Login";
                    Navigate("/Login");
                }
            } catch (error) {
                console.log("error from get user Profile :", error);
                set_Auth(false);
                // window.location.href = "/Login";
                Navigate("/Login");
            }
        };
        const fetch_images = () => {
            return new Promise((resolve, reject) => {
                const images = [
                    EditeIcon,
                    user_image,
                    message_icon,
                    notification_icon,
                    user_default,
                    Project_Accpted,
                    Project_Done,
                    Project_Waiting2,
                    Project_Rejected,
                    Alert_icon,
                    Project_Waiting,
                ];
                let loadedCount = 0;
                if (images.length === 0) resolve();
                images.forEach((imageSrc) => {
                    const img = new Image();
                    img.onload = () => {
                        loadedCount++;
                        if (loadedCount === images.length) {
                            resolve();
                        }
                    };
                    img.onerror = () => {
                        resolve();
                    };
                    img.src = imageSrc;
                });
            });
        };
        // Promise.all([fetchData()]);
        Promise.all([fetch_images(), fetchData()])
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!user) return;
        else if (
            !user.firstName ||
            !user.lastName ||
            !user.email ||
            !user.telephone ||
            !user.about ||
            !user.nationalCardNumber ||
            !user.JobTitle ||
            !user.Skills ||
            user.Skills.length === 0
            // ||
            // !user.profile_pic_link
        ) {
            // if (isProfileIncomplete(user)) {
            setisProfileCompleted(false);
            set_Profile_Completed(false);
            set_show_Alert_completeProfile(true);
        } else {
            setisProfileCompleted(true);
            set_Profile_Completed(true);
            set_show_Alert_completeProfile(false);
        }
    }, [user]);
    if (loading)
        return (
            <div className=" w-screen h-screen flex flex-col items-center justify-center">
                <img src={Logo} alt="" />
                <span className="loader"></span>
            </div>
        );
    else
        return (
            <div className="relative h-screen overflow-y-auto custom-overflow overflow-x-hidden ">
                <NavBar isProfileCompleted={isProfileCompleted} />
                <div className=" pt-[60px]">
                    <Outlet />
                </div>
            </div>
        );
}

export default Freelancer;
