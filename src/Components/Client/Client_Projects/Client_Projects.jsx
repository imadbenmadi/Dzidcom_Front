import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../../AppContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import Swal from "sweetalert2";
function Client_Projects() {
    const Naviagte = useNavigate();
    const { user } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Projcets, setProjcets] = useState([]);

    useEffect(() => {
        const fetchProjcets = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/Clients/${user.id}/Projects`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                // console.log("response from get prjects", response);
                if (response.status == 200) {
                    const { Projcets } = response.data;
                    setProjcets(Projcets);
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
        fetchProjcets();
    }, []);

    if (loading) {
        return (
            <div className=" w-screen h-[80vh] flex flex-col items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    } else
        return (
            <div>
                {Projcets?.length != 0 ? (
                    <div className=" flex flex-col items-center justify-center">
                        <div className="pt-24 flex justify-center items-center gap-2 text-gray-500 text-base font-semibold">
                            <IoIosWarning />
                            <h1>No Projects Found</h1>
                        </div>
                        <Link
                            to={"/Client/Projects/Add"}
                            className=" bg-perpol_v px-3 py-2 rounded-md cursor-pointer text-white font-semibold text-base
                                        flex items-center justify-centerd mt-4 gap-4"
                        >
                            <div>
                                <FaPlus />
                            </div>
                            <div>Add new Project</div>
                        </Link>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                        <div>Your Projects</div>
                    </div>
                )}
            </div>
        );
}

export default Client_Projects;
