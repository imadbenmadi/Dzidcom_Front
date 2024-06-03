import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../../AppContext.jsx";
import { Editor, EditorState, convertFromRaw, ContentState } from "draft-js";

function ProjectItem() {
    const location = useLocation();
    const { user } = useAppContext();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const navigate = useNavigate();
    const [Delete_Loading, SetDelete_Loading] = useState(false);
    const Delete_Project = async () => {
        SetDelete_Loading(true);
        try {
            const response = await axios.delete(
                `http://localhost:3000/Clients/${user.id}/Projects/${
                    location.pathname.split("/")[3]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                Swal.fire("Success", "Project Deleted Successfully", "success");
                navigate("/Client/Projects");
            } else if (response.status === 401) {
                Swal.fire(
                    "Unauthorized",
                    "Please You have to Loginn Again",
                    "error"
                );
                Navigate("/Login");
            } else Swal.fire("Error", "Somthing went wrong", "error");
        } catch (err) {
            Swal.fire("Error", "Somthing went wrong", "error");
        } finally {
            SetDelete_Loading(false);
        }
    };
    if (!location.pathname.split("/")[3]) {
        return <Navigate to="/Client/Projects" />;
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [project, setProject] = useState(null);

    // useEffect(() => {
    //     console.log("Project : ", project);
    // }, [project]);

    useEffect(() => {
        const fetchProject = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/Clients/${user.id}/Projects/${
                        location.pathname.split("/")[3]
                    }`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                console.log("response from prject item : ", response.data);
                if (response.status === 200) {
                    const project = response.data.Project;
                    setProject(project);

                    let contentState;
                    if (isDraftJSFormat(project.Description)) {
                        contentState = convertFromRaw(
                            JSON.parse(project.Description)
                        );
                    } else {
                        contentState = ContentState.createFromText(
                            project.Description
                        );
                    }

                    setEditorState(EditorState.createWithContent(contentState));
                } else if (response.status === 401) {
                    Swal.fire("Error", "you should login again", "error");
                    navigate("/Login");
                } else {
                    setError(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, []);

    const isDraftJSFormat = (str) => {
        try {
            const parsed = JSON.parse(str);
            return parsed.blocks && parsed.entityMap;
        } catch (e) {
            return false;
        }
    };

    if (loading) {
        return (
            <div className="w-screen h-[80vh] flex flex-col items-center justify-center">
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
    return (
        <div className="w-[90%] mx-auto max-w-[900px] mt-6">
            <div className="font-semibold text-gray_v text-2xl">
                {project?.Title}
            </div>
            <div className=" flex  items-center gap-3">
                {(project?.status == "Pending" ||
                    project?.status == "Rejected") &&
                    (Delete_Loading ? (
                        <div className=" small-loader mt-3"></div>
                    ) : (
                        <div
                            className=" bg-red-500 py-1 px-2 text-white rounded-lg cursor-pointer w-fit mt-4"
                            onClick={Delete_Project}
                        >
                            Delete
                        </div>
                    ))}
                {project?.status == "Accepted" && project?.FreelacnerId && (
                    <Link
                        to={`/Client/Projects/${project?.id}/Payment`}
                        className=" bg-perpol_v py-1 px-2 text-white rounded-lg cursor-pointer w-fit mt-4"
                    >
                        Pay the Project Fees
                    </Link>
                )}
            </div>

            <div className=" border my-6 p-4 rounded-lg">
                <div className=" flex gap-2 text-sm font-semibold">
                    <div>Project Status : </div>
                    <div>
                        {project?.status === "Payed" ? (
                            <div className="">
                                <span className="text-green-500">Payed</span>{" "}
                                Freelancer is working on your project
                            </div>
                        ) : project?.status === "Rejected" ? (
                            <div className="">
                                <span className="text-red-600">Rejected</span>{" "}
                                Your project has been rejected
                            </div>
                        ) : project?.status === "Completed" ? (
                            <div className="">
                                <span className="text-green-500">
                                    Completed
                                </span>{" "}
                                Your project has been closed.
                            </div>
                        ) : project?.status === "Accepted" &&
                          project?.FreelancerId ? (
                            <div className="">
                                <span className="text-perpol_v">Accepted</span>{" "}
                                <span className=" text-red-500">
                                    You have to pay the fees to start the
                                    project
                                </span>
                            </div>
                        ) : project?.status === "Accepted" &&
                          !project?.FreelancerId ? (
                            <div>
                                <span className="text-perpol_v">Accepted</span>{" "}
                                Searching For the Freelancer
                            </div>
                        ) : project?.status === "Pending" ? (
                            <div>
                                <span className="text-perpol_v">Pending</span>{" "}
                                <span className=" text-gray-500">
                                    Ower team is reviewing your project
                                </span>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="text-sm  mb-2 font-semibold text-white">
                    <div className=" flex gap-2">
                        {project?.Field_is_Graphic_design && (
                            <div className="bg-perpol_v text-md rounded-lg py-1 mt-2 px-3 ">
                                Graphic Design
                            </div>
                        )}
                        {project?.Field_is_Content_creation && (
                            <div className="bg-perpol_v text-md rounded-lg py-1 mt-2 px-3 ">
                                Content creation
                            </div>
                        )}
                        {project?.Field_is_SEO_SIM && (
                            <div className="bg-perpol_v text-md rounded-lg py-1 mt-2 px-3 ">
                                SEO/SIM
                            </div>
                        )}
                    </div>
                </div>
                {project?.Frelancer_Experiance && (
                    <div className="flex items-center justify-between w-full">
                        <div className="text-sm pt-2 text-gray_v">
                            frelancer experiance :{" "}
                            <span className=" font-semibold">
                                {project?.Frelancer_Experiance}
                            </span>
                        </div>
                    </div>
                )}
                {project?.Budget && (
                    <div className="flex items-center justify-between w-full text-sm font-semibold">
                        <div className="text-sm pt-4 text-gray_v">
                            {project?.Budget}
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between w-full font-semibold">
                    <div className="text-sm pt-1 text-gray_v">
                        Created at :{" "}
                        {new Date(project?.createdAt).toLocaleDateString()}
                    </div>
                </div>
            </div>

            <div>
                <div className="text-sm font-semibold">Project Description</div>
                <div className="text-sm font-semibold pl-6 text-gray_v">
                    <Editor editorState={editorState} readOnly={true} />
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
