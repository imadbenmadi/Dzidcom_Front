import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../../AppContext.jsx";
import { Editor, EditorState, convertFromRaw, ContentState } from "draft-js";
import Project_Accpted from "../../../../public/Project/Project_Accpted.png";
import Project_Waiting from "../../../../public/Project/Project_Waiting.png";
import Project_Done from "../../../../public/Project/Project_Done.png";
import Project_Waiting2 from "../../../../public/Project/Project_Waiting2.png";
import Project_Rejected from "../../../../public/Project/Project_Rejected.png";
import Alert_icon from "../../../../public//Project/Alert.png";
function ProjectItem() {
    const location = useLocation();
    const { user } = useAppContext();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const Navigate = useNavigate();
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
                Navigate("/Client/Projects");
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
        setLoading(true);

        const fetch_images = () => {
            return new Promise((resolve, reject) => {
                const images = [
                    Project_Accpted,
                    Project_Waiting,
                    Project_Done,
                    Project_Waiting2,
                    Project_Rejected,
                    Alert_icon,
                ];
                let loadedCount = 0;
                if (images.length === 0) resolve();
                images.forEach((imageSrc) => {
                    const img = new Image();
                    img.onload = () => {
                        loadedCount++;
                        if (loadedCount === images.length) {
                            resolve(); // Resolve promise when all images are loaded
                        }
                    };
                    img.onerror = () => {
                        resolve(); // Reject if any image fails to load
                    };
                    img.src = imageSrc;
                });
            });
        };
        const fetchProject = async () => {
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
                    Navigate("/Login");
                } else {
                    setError(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                // setLoading(false);
            }
        };
        Promise.all([fetch_images(), fetchProject()])
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
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
            <div className="mx-auto w-fit">
                <div className="">
                    {project?.status === "Accepted" &&
                    !project?.FreelancerId ? (
                        <img
                            src={Project_Accpted}
                            className="w-[250px]"
                            alt=""
                        />
                    ) : project?.status === "Pending" ? (
                        <img
                            src={Project_Waiting}
                            className="w-[250px]"
                            alt=""
                        />
                    ) : project?.status === "Rejected" ? (
                        <img
                            src={Project_Rejected}
                            className="w-[250px]"
                            alt=""
                        />
                    ) : project?.status === "Completed" ? (
                        <img src={Project_Done} className="w-[250px]" alt="" />
                    ) : project?.status === "Payed" ||
                      (project?.status === "Accepted" &&
                          project?.FreelancerId) ? (
                        <img
                            src={Project_Waiting2}
                            className="w-[250px]"
                            alt=""
                        />
                    ) : null}
                </div>
                <div className=" max-w-[300px] font-semibold text-gray_v py-2">
                    {project?.status === "Payed" ? (
                        <>
                            <div className="">
                                <span className="text-green-500">Payed :</span>{" "}
                                Your payment accepted. <br />a Freelancer is
                                working on your project
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Link
                                    to={`/Client/Projects/${project?.id}/Process`}
                                    className=" mt-4 py-1 px-2 rounded-md text-white mx-auto
                                    cursor-pointer bg-perpol_v"
                                >
                                    Track Project
                                </Link>
                            </div>
                        </>
                    ) : project?.status === "Rejected" ? (
                        <>
                            <div className="">
                                <span className="text-red-600">Rejected :</span>{" "}
                                Your project has been rejected
                            </div>
                            <div className=" w-full flex justify-center">
                                {Delete_Loading ? (
                                    <div className=" small-loader mt-3"></div>
                                ) : (
                                    <div
                                        className=" bg-red-500 py-1 px-2 text-white rounded-lg cursor-pointer w-fit mt-4"
                                        onClick={Delete_Project}
                                    >
                                        Delete Project
                                    </div>
                                )}
                            </div>
                        </>
                    ) : project?.status === "Completed" ? (
                        <>
                            <div className="">
                                <span className="text-green-500">
                                    Completed :
                                </span>{" "}
                                Your project has been closed.
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <Link
                                    to={`/Client/Projects/${project?.id}/Process`}
                                    className=" mt-4 py-1 px-2 rounded-md text-white mx-auto
                                    cursor-pointer bg-perpol_v"
                                >
                                    View Work
                                </Link>
                            </div>
                        </>
                    ) : !project?.isPayment_ScreenShot_uploaded &&
                      project?.status === "Accepted" &&
                      project?.FreelancerId ? (
                        <>
                            <div className="">
                                <span className="text-gray_v">Accepted :</span>{" "}
                                <span className=" text-red-500">
                                    You have to pay the fees to start the
                                    project
                                </span>
                            </div>
                            <div className=" w-full flex justify-center">
                                <Link
                                    to={`/Client/Projects/${project?.id}/Payment`}
                                    className=" bg-perpol_v font-semibold py-1 px-2 text-white rounded-lg cursor-pointer w-fit mt-4"
                                >
                                    Pay the Project Fees
                                </Link>
                            </div>
                        </>
                    ) : project?.isPayment_ScreenShot_uploaded &&
                      project?.status === "Accepted" &&
                      project?.FreelancerId ? (
                        <div className="">
                            <span className="text-perpol_v">Accepted :</span>{" "}
                            <span className=" text-gray_v">
                                Waiting Dashboard to accept the payment
                            </span>
                        </div>
                    ) : project?.status === "Accepted" &&
                      !project?.FreelancerId ? (
                        <div>
                            <span className="text-perpol_v">Accepted :</span>{" "}
                            Searching For the Freelancer
                        </div>
                    ) : project?.status === "Pending" ? (
                        <>
                            <div>
                                <span className="text-perpol_v">Pending :</span>{" "}
                                <span className=" text-gray_v">
                                    Ower team is reviewing your project
                                </span>
                            </div>
                            <div className=" w-full flex justify-center">
                                {Delete_Loading ? (
                                    <div className=" small-loader mt-3"></div>
                                ) : (
                                    <div
                                        className=" bg-red-500 py-1 px-2 text-white rounded-lg cursor-pointer w-fit mt-4"
                                        onClick={Delete_Project}
                                    >
                                        Delete Project
                                    </div>
                                )}
                            </div>
                        </>
                    ) : null}
                    {/* <div className=" flex  items-center gap-3">
                        {(project?.status == "Pending" ||
                            project?.status == "Rejected") &&
                            // ||project?.status == "Completed"
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
                        {(!project?.isPayment_ScreenShot_uploaded ||
                            (project?.isPayment_ScreenShot_uploaded &&
                                project?.isPayment_ScreenShot_Rejected)) &&
                            project?.status == "Accepted" &&
                            project?.FreelancerId && (
                                <Link
                                    to={`/Client/Projects/${project?.id}/Payment`}
                                    className=" bg-perpol_v font-semibold py-1 px-2 text-white rounded-lg cursor-pointer w-fit mt-4"
                                >
                                    Pay the Project Fees
                                </Link>
                            )}
                    </div> */}
                </div>
            </div>
            <div className=" my-6 ">
                <div className=" pb-2 font-semibold text-gray_v">
                    Project Details
                </div>
                <div className=" border p-4 rounded-lg">
                    <div className=" flex gap-2 text-sm font-semibold">
                        {/* <div>Project Status : </div>
                        <div>
                            {project?.status === "Payed" ? (
                                <div className="">
                                    <span className="text-green-500">
                                        Payed :
                                    </span>{" "}Your payment accepted. <br />
                                    a Freelancer is working on your project
                                </div>
                            ) : project?.status === "Rejected" ? (
                                <div className="">
                                    <span className="text-red-600">
                                        Rejected :
                                    </span>{" "}
                                    Your project has been rejected
                                </div>
                            ) : project?.status === "Completed" ? (
                                <div className="">
                                    <span className="text-green-500">
                                        Completed :
                                    </span>{" "}
                                    Your project has been closed.
                                </div>
                            ) : !project?.isPayment_ScreenShot_uploaded &&
                              project?.status === "Accepted" &&
                              project?.FreelancerId ? (
                                <div className="">
                                    <span className="text-perpol_v">
                                        Accepted :
                                    </span>{" "}
                                    <span className=" text-red-500">
                                        You have to pay the fees to start the
                                        project
                                    </span>
                                </div>
                            ) : project?.isPayment_ScreenShot_uploaded &&
                              project?.status === "Accepted" &&
                              project?.FreelancerId ? (
                                <div className="">
                                    <span className="text-perpol_v">
                                        Accepted :
                                    </span>{" "}
                                    <span className=" text-red-500">
                                        Waiting Dashboard to accept the payment
                                    </span>
                                </div>
                            ) : project?.status === "Accepted" &&
                              !project?.FreelancerId ? (
                                <div>
                                    <span className="text-perpol_v">
                                        Accepted :
                                    </span>{" "}
                                    Searching For the Freelancer
                                </div>
                            ) : project?.status === "Pending" ? (
                                <div>
                                    <span className="text-perpol_v">
                                        Pending :
                                    </span>{" "}
                                    <span className=" text-gray-500">
                                        Ower team is reviewing your project
                                    </span>
                                </div>
                            ) : null}
                        </div> */}
                        <div>Project Title : </div>
                        <div className=" text-gray_v">{project?.Title}</div>
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
                    {project?.Client_Budget && (
                        <div className="flex items-center justify-between w-full text-sm font-semibold">
                            <div className="text-sm pt-4 text-gray_v flex items-center gap-2">
                                Budget: {project?.Client_Budget}
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
                    <div className="text-sm font-semibold pt-4">
                        Project Description
                    </div>
                    <div className="text-sm font-semibold pl-6 py-6 text-gray_v">
                        <Editor editorState={editorState} readOnly={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
