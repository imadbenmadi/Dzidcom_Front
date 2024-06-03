import React from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../AppContext.jsx";

function ProjectItem() {
    const Location = useLocation();
    const { user } = useAppContext();

    const Naviagte = useNavigate();
    if (!Location.pathname.split("/")[3]) {
        Navigate("/Client/Projects");
    }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Projcet, setProjcet] = useState();
    useEffect(() => {
        console.log("project : ", Projcet);
    }, [Projcet]);
    useEffect(() => {
        setLoading(true);
        const FetchProjcet = async ({ setProjcet, setLoading, setError }) => {
            setLoading(true);
            try {
                console.log("start fetching ");
                console.log(user.id);
                console.log(Location.pathname.split("/")[3]);
                const response = await axios.get(
                    `http://localhost:3000/Clients/${user.id}/Projects/${
                        Location.pathname.split("/")[3]
                    }`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                console.log("response from get prjects", response);
                if (response.status == 200) {
                    const Projcet = response.data.Project;
                    setProjcet(Projcet);
                } else if (response.status == 401) {
                    Swal.fire("Error", "you should login again", "error");
                    Naviagte("/Login");
                } else {
                    setError(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        FetchProjcet({ setProjcet, setLoading, setError });
    }, []);
    if (loading) {
        return (
            <div className=" w-screen h-[80vh] flex flex-col items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    } else {
        return (
            <div>
                <div>{Projcet?.Title}</div>
            </div>
        );
    }
}

export default ProjectItem;
