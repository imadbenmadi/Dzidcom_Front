import React from "react";
import Alert_Complete_Profile from "../Alerts/Alert_Complete_Profile";
import { useAppContext } from "../../../AppContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
function Freelancer_Process_item() {
    const location = useLocation();
    const Naviagte = useNavigate();
    const { user } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Project, setProject] = useState([]);
    const { show_Alert_completeProfile } = useAppContext();
    useEffect(() => {
        setLoading(true);
        const FetchProject = async ({ setProject, setLoading, setError }) => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/Freelancers/${user.id}/Process/${
                        location.pathname.split("/")[3]
                    }`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                console.log("response from get prject", response);
                if (response.status == 200) {
                    const Project = response.data.Project;
                    setProject(Project);
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
        FetchProject({ setProject, setLoading, setError });
    }, []);

    if (loading) {
        return (
            <div className=" w-screen h-[80vh] flex flex-col items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    } else if (error)
        return (
            <div className=" w-screen h-screen flex items-center justify-center">
                <div className="text-red-600 font-semibold">
                    {error.message}
                </div>
            </div>
        );
    else
        return (
            <div>
                {show_Alert_completeProfile && <Alert_Complete_Profile />}
                <div>
                    {!Project ? (
                        <div className=" flex flex-col items-center justify-center">
                            <div className="pt-24 flex justify-center items-center gap-2 text-gray-500 text-base font-semibold">
                                <IoIosWarning />
                                <h1>No Projects Found</h1>
                            </div>
                        </div>
                    ) : (
                        <div className=" flex flex-col items-center justify-center">
                            <div className=" w-[90%] mx-auto">
                                {/* {Project.map((Project) => ( */}
                                <div
                                    // key={Project.id}
                                    className="flex flex-col items-center justify-center border  rounded-md p-4 my-4"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-sm  mb-6 font-semibold text-white">
                                            <div className=" text-gray_v text-lg">
                                                {Project?.Title}
                                            </div>
                                            <div className=" flex gap-2">
                                                {Project?.Field_is_Graphic_design && (
                                                    <div className="bg-perpol_v text-md rounded-lg py-1 mt-2 px-3 ">
                                                        Graphic Design
                                                    </div>
                                                )}
                                                {Project?.Field_is_Content_creation && (
                                                    <div className="bg-perpol_v text-md rounded-lg py-1 mt-2 px-3 ">
                                                        Content creation
                                                    </div>
                                                )}
                                                {Project?.Field_is_SEO_SIM && (
                                                    <div className="bg-perpol_v text-md rounded-lg py-1 mt-2 px-3 ">
                                                        SEO/SIM
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <Link
                                            to={`/Freelancer/Process/${Project.id}`}
                                            className="bg-perpol_v px-3 py-2 rounded-md cursor-pointer text-white font-semibold text-base"
                                        >
                                            View
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <div
                                            className={`text-sm  font-semibold text-gray_v `}
                                        >
                                            <div>
                                                {Project?.status === "Payed" ? (
                                                    <div className="">
                                                        <span className="text-green-500">
                                                            Client Payed the
                                                            Project fees
                                                        </span>{" "}
                                                        <br />
                                                        <span className=" text-gray_v">
                                                            Upload the Files as
                                                            soon as you finished
                                                            the Work
                                                        </span>
                                                    </div>
                                                ) : Project?.status ===
                                                  "Completed" ? (
                                                    <div className="">
                                                        <span className="text-green-500">
                                                            Completed :
                                                        </span>{" "}
                                                        <span className=" text-gray_v">
                                                            the Project has been
                                                            closed.
                                                        </span>
                                                    </div>
                                                ) : Project?.status ===
                                                  "Accepted" ? (
                                                    <div className="">
                                                        <span className="text-green-500">
                                                            Accepted :
                                                        </span>{" "}
                                                        <span className=" text-gray_v">
                                                            Waiting for the
                                                            Client Payment
                                                        </span>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    {Project?.Frelancer_Experiance && (
                                        <div className="flex items-center justify-between w-full">
                                            <div className="text-sm pt-2 text-gray_v">
                                                frelancer experiance :{" "}
                                                <span className=" font-semibold">
                                                    {
                                                        Project?.Frelancer_Experiance
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    {Project?.Budget && (
                                        <div className="flex items-center justify-between w-full text-sm font-semibold">
                                            <div className="text-sm pt-4 text-gray_v">
                                                {Project?.Budget}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between w-full font-semibold">
                                        <div className="text-sm pt-1 text-gray_v">
                                            Created at :{" "}
                                            {new Date(
                                                Project?.createdAt
                                            ).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
}

export default Freelancer_Process_item;
