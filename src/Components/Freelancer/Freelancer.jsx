import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import axios from "axios";
import { Outlet } from "react-router";
import NavBar from "./NavBar/NavBar";
function Freelancer() {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const { userId, userType, isAuth, set_user, user } = useAppContext();
    if (!isAuth || !userId || userType !== "freelancer") {
        window.location.href = "/Login";
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
                    window.location.href = "/Login";
                    // set_Auth(false);
                }
            } catch (error) {
                console.log("error from get user Profile :", error);
                window.location.href = "/Login";
                // set_Auth(false);
            }
        };

        // Promise.all([fetch_images(), fetchData()])
        Promise.all([fetchData()])
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        console.log("Updated user in the context", user);
    }, [user]);
    const isProfileIncomplete = (user) => {
        return (
            !user.telephone ||
            !user.about ||
            !user.nationalCardNumber ||
            !user.portfolioWebsite ||
            !user.JobTitle ||
            (user.PortfolioItems && user.PortfolioItems.length === 0) ||
            (user.Skills && user.Skills.length === 0) ||
            (user.Freelancer_SocialMediaLinks &&
                user.Freelancer_SocialMediaLinks.length === 0)
        );
    };
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
    else if (!isProfileIncomplete(user)) {
        return <div>please complete your profile</div>;
    } else
        return (
            <div className="relative h-screen overflow-y-auto custom-overflow overflow-x-hidden ">
                <NavBar />
                <Outlet />
            </div>
        );
}

export default Freelancer;
