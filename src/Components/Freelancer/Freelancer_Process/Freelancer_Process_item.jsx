import React from "react";
import Alert_Complete_Profile from "../Alerts/Alert_Complete_Profile";
import { useAppContext } from "../../../AppContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import Project_Accpted from "../../../../public/Project/Project_Accpted.png";
import Project_Waiting from "../../../../public/Project/Project_Waiting.png";
import Project_Done from "../../../../public/Project/Project_Done.png";
import Project_Waiting2 from "../../../../public/Project/Project_Waiting2.png";
import Project_Rejected from "../../../../public/Project/Project_Rejected.png";
import { Editor, EditorState, convertFromRaw, ContentState } from "draft-js";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import Alert_icon from "../../../../public//Project/Alert.png";

function Freelancer_Process_item() {
    const [openUpload, setOpenUpload] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);
    const toogle_upload = () => {
        if (openUpload) window.scrollTo(0, 0);
        setOpenUpload(!openUpload);
    };
    const location = useLocation();
    const projectId = location.pathname.split("/")[3];
    const Naviagte = useNavigate();
    const { user } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [project, setProject] = useState([]);
    const { show_Alert_completeProfile } = useAppContext();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const isDraftJSFormat = (str) => {
        try {
            const parsed = JSON.parse(str);
            return parsed.blocks && parsed.entityMap;
        } catch (e) {
            return false;
        }
    };
    useEffect(() => {
        setLoading(true);
        const FetchProject = async ({ setProject, setLoading, setError }) => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/Freelancers/${user.id}/Process/${projectId}`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                console.log("response from get process", response);
                if (response.status == 200) {
                    const Project = response.data.Project;
                    setProject(Project);
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
    }
    // else if (error)
    //     return (
    //         <div className=" w-screen h-screen flex items-center justify-center">
    //             <div className="text-red-600 font-semibold">
    //                 {error.message}
    //             </div>
    //         </div>
    //     );
    else
        return (
            <div className=" w-full h-full relative">
                {openUpload && (
                    <div
                        className=" bg-gray_v bg-opacity-10 z-10 absolute top-0 left-0
                      w-full h-full  flex flex-col pt-10  items-center"
                    >
                        <div className=" w-fit mx-auto ">
                            <img src={Alert_icon} className=" w-20" alt="" />
                        </div>
                        <div
                            className=" w-[600px] h-[400px] bg-white text-gray_v
                         rounded-lg py-5 px-10 flex flex-col justify-between   "
                        >
                            <div className=" text-sm font-semibold text-grayè_v">
                                Please choose a single file that contains all
                                the project files.
                            </div>
                            <div></div>
                            <div className=" flex items-center justify-center gap-6">
                                <div
                                    className=" bg-green_v text-white py-2 
                                px-4 rounded-xl cursor-pointer "
                                >
                                    Upload
                                </div>
                                <div
                                    onClick={toogle_upload}
                                    className="  bg-red-600 text-white py-2 
                                px-4 rounded-xl cursor-pointer"
                                >
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {show_Alert_completeProfile && <Alert_Complete_Profile />}
                <div className="w-[90%] mx-auto max-w-[900px] pt-6">
                    <div className="font-semibold text-gray_v text-2xl">
                        {project?.Title}
                    </div>
                    <div className="mx-auto w-fit max-w-[300px] md:max-w-[500px]">
                        <div className=" flex justify-center">
                            {project?.status === "Accepted" ? (
                                <img
                                    src={Project_Accpted}
                                    className="w-[250px]"
                                    alt=""
                                />
                            ) : project?.status === "Completed" ? (
                                <img
                                    src={Project_Done}
                                    className="w-[250px]"
                                    alt=""
                                />
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
                        <div className=" max-w-[300px] md:max-w-[500px] font-semibold text-gray_v py-2">
                            {project?.status === "Payed" ? (
                                <>
                                    <div className="">
                                        <span className="text-green-500">
                                            Client is waiting for your work :
                                        </span>{" "}
                                        please upload the files as soon as you
                                        finished working on the project
                                    </div>
                                    <div className="w-full flex gap-2  items-center justify-center">
                                        <div
                                            onClick={toogle_upload}
                                            className=" mt-4 py-1 px-2 rounded-md text-white mx-auto
                                            cursor-pointer bg-perpol_v flex items-center gap-2 "
                                        >
                                            <MdOutlineFileUpload className=" text-xl  shrink-0" />{" "}
                                            Upload Files
                                        </div>
                                        {project?.isWorkUploaded && (
                                            <div
                                                className=" mt-4 py-1 px-2 rounded-md text-white mx-auto
                                                cursor-pointer bg-green_v  flex items-center gap-2 "
                                            >
                                                <MdOutlineFileDownload className=" text-xl  shrink-0" />
                                                Download Work
                                            </div>
                                        )}
                                        <div></div>
                                    </div>
                                </>
                            ) : project?.status === "Completed" ? (
                                <>
                                    <div className="">
                                        <span className="text-green-500">
                                            Completed :
                                        </span>{" "}
                                        the project has been closed.
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <div
                                            to={`/Client/Projects/${project?.id}/Process`}
                                            className=" mt-4 py-1 px-2 rounded-md text-white mx-auto
                                            cursor-pointer bg-perpol_v flex items-center gap-2"
                                        >
                                            <MdOutlineFileDownload />
                                            Download your Work
                                        </div>
                                    </div>
                                </>
                            ) : project?.status === "Accepted" ? (
                                <>
                                    <div className="">
                                        <span className="text-green_v">
                                            Accepted :
                                        </span>{" "}
                                        <span className=" text-gray-500">
                                            waiting for the client to pay the
                                            project fees
                                        </span>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className=" my-6 ">
                        <div className=" pb-2 font-semibold text-gray_v">
                            Project Details
                        </div>
                        <div className=" border p-4 rounded-lg">
                            <div className=" flex gap-2 text-sm font-semibold">
                                <div>Project Title : </div>
                                <div className=" text-gray_v">
                                    {project?.Title}
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

                            <div className="flex items-center justify-between w-full py-2 font-semibold">
                                <div className="text-sm pt-1 text-gray_v">
                                    Deadline : {project?.DeadLine}
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-full font-semibold">
                                <div className="text-sm pt-1 text-gray_v">
                                    Created at :{" "}
                                    {new Date(
                                        project?.createdAt
                                    ).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm font-semibold pt-4">
                                Project Description
                            </div>
                            <div className="text-sm font-semibold pl-6 py-6 text-gray_v">
                                <Editor
                                    editorState={editorState}
                                    readOnly={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Freelancer_Process_item;
