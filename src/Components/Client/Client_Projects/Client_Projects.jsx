import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../../AppContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import fetchProjcets from "./API/Get_Project.jsx";
import Swal from "sweetalert2";
function Client_Projects() {
    const Naviagte = useNavigate();
    const { user } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Projcets, setProjcets] = useState([]);
    useEffect(() => {
        console.log("Projects:", Projcets);
    }, [Projcets]);
    useEffect(() => {
        fetchProjcets(setProjcets, setLoading, setError);
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
                {!Projcets || Projcets?.length == 0 ? (
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
                    <div className=" flex flex-col items-center justify-center">
                        <Link
                            to={"/Client/Projects/Add"}
                            className=" bg-perpol_v px-3 py-2 rounded-md cursor-pointer text-white font-semibold text-base
                                        flex items-center justify-centerd mt-4 gap-4 "
                        >
                            <div>
                                <FaPlus />
                            </div>
                            <div>Add new Project</div>
                        </Link>
                        <div className=" w-[90%] mx-auto">
                            {Projcets.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex flex-col items-center justify-center border  rounded-md p-4 my-4"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-xl mb-6 font-semibold text-gray_v">
                                            <div>{project?.Title}</div>
                                            <div className=" flex gap-2">
                                                {project?.Field_is_Graphic_design && (
                                                    <div className="bg-perpol_v text-md rounded-lg py-2 mt-2 px-3 ">
                                                        Graphic Design
                                                    </div>
                                                )}
                                                {project?.Field_is_Content_creation && (
                                                    <div className="bg-perpol_v text-md rounded-lg py-2 mt-2 px-3 ">
                                                        Content creation
                                                    </div>
                                                )}
                                                {project?.Field_is_SEO_SMM && (
                                                    <div className="bg-perpol_v text-md rounded-lg py-2 mt-2 px-3 ">
                                                        SEO/SIM
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <Link
                                            to={`/Client/Projects/${project.id}`}
                                            className="bg-perpol_v px-3 py-2 rounded-md cursor-pointer text-white font-semibold text-base"
                                        >
                                            View
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <div
                                            className={`text-sm  font-semibold text-gray_v `}
                                        >
                                            {project?.Status === "Payed" ? (
                                                <div className="">
                                                    <span className="text-green-500">
                                                        Payed:
                                                    </span>{" "}
                                                    Freelancer is working on
                                                    your project
                                                </div>
                                            ) : project?.Status ===
                                              "Rejected" ? (
                                                <div className="">
                                                    <span className="text-red-600">
                                                        Rejected:
                                                    </span>{" "}
                                                    Your project has been
                                                    rejected
                                                </div>
                                            ) : project?.Status ===
                                              "Completed" ? (
                                                <div className="">
                                                    <span className="text-green-500">
                                                        Completed:
                                                    </span>{" "}
                                                    Your project has been
                                                    closed.
                                                </div>
                                            ) : project?.Status ===
                                                  "Accepted" &&
                                              project?.FreelancerId ? (
                                                <div className="">
                                                    <span className="text-perpol_v">
                                                        Accepted:
                                                    </span>{" "}
                                                    <span className=" text-red-500">
                                                        You have to pay the fees
                                                        to start the project
                                                    </span>
                                                </div>
                                            ) : project?.Status ===
                                                  "Accepted" &&
                                              !project?.FreelancerId ? (
                                                <div>
                                                    <span className="text-perpol_v">
                                                        Accepted:
                                                    </span>{" "}
                                                    Searching For the Freelancer
                                                </div>
                                            ) : project?.Status ===
                                              "Pending" ? (
                                                <div>
                                                    <span className="text-perpol_v">
                                                        Pending:
                                                    </span>{" "}
                                                    Dzidcom team is reviewing
                                                    your project
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {project?.Frelancer_Experiance && (
                                        <div className="flex items-center justify-between w-full">
                                            <div className="text-sm pt-2 text-gray_v">
                                                need the freelancer to be :{" "}
                                                {project?.Frelancer_Experiance}
                                            </div>
                                        </div>
                                    )}
                                    {project?.Budget && (
                                        <div className="flex items-center justify-between w-full">
                                            <div className="text-sm pt-2 text-gray_v">
                                                {project?.Budget}
                                                {" DA"}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between w-full">
                                        <div className="text-sm pt-2 text-gray_v">
                                            Created at :{" "}
                                            {new Date(
                                                project?.createdAt
                                            ).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
}

export default Client_Projects;
