import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import axios from "axios";
function Freelancer() {
    const [loading, setLoading] = useState(true);

    const { userId, userType, isAuth } = useAppContext();
    if (!isAuth || !userId || userType !== "freelancer") {
        window.location.href = "/Login";
    }
    const Navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/Freelancers/${userId}/Profile`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                console.log("response from get user Profile :", response.data);
                if (response.status == 200) {
                    // store_login(response.data.userId, response.data.userType);
                    // setUserType(response.data.userType);
                    // set_Auth(true);
                } else {
                    // set_Auth(false);
                }
            } catch (error) {
                console.log("error from get user Profile :", error);
                // set_Auth(false);
            }
        };
        // const fetch_images = () => {
        //     return new Promise((resolve, reject) => {
        //         const images = [Logo];
        //         images.forEach((imageSrc) => {
        //             const img = new Image();
        //             img.onload = () => {
        //                 resolve();
        //             };
        //             img.onerror = () => {
        //                 resolve();
        //             };
        //             img.src = imageSrc;
        //         });
        //     });
        // };

        // Promise.all([fetch_images(), fetchData()])
        Promise.all([fetchData()])
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);
    return <div>Freelancer</div>;
}

export default Freelancer;
