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

function Client() {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isProfileCompleted, setisProfileCompleted] = useState(false);
    const { userId, userType, isAuth, set_user, user, set_Profile_Completed } =
        useAppContext();
    if (!isAuth || !userId || userType !== "Client") {
        window.location.href = "/Login";
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/Clients/${userId}/Profile`,
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
                    window.location.href = "/Login";
                    // set_Auth(false);
                }
            } catch (error) {
                console.log("error from get user Profile :", error);
                window.location.href = "/Login";
                // set_Auth(false);
            }
        };
        const fetch_images = () => {
            return new Promise((resolve, reject) => {
                const images = [user_image, message_icon, notification_icon];
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
    const isProfileIncomplete = (user) => {
        return (
            !user.telephone ||
            !user.about ||
            !user.nationalCardNumber ||
            !user.portfolioWebsite ||
            !user.JobTitle ||
            (user.PortfolioItems && user.PortfolioItems.length === 0) ||
            (user.Skills && user.Skills.length === 0) ||
            (user.Client_SocialMediaLinks &&
                user.Client_SocialMediaLinks.length === 0)
        );
    };
    useEffect(() => {
        if (user) {
            if (isProfileIncomplete(user)) {
                setisProfileCompleted(false);
                set_Profile_Completed(false);
            } else {
                setisProfileCompleted(true);
                set_Profile_Completed(true);
            }
        }
    }, [user]);

    if (loading)
        return (
            <div className=" w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    // if (!user) {
    //     return (
    //         <div className="w-screen h-screen flex items-center justify-center">
    //             <span className="loader"></span>
    //         </div>
    //     );
    // }
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

export default Client;
