import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import searchIcon from "../../../../public/search.png";
function Freelancer_jobs() {
    const Naviagte = useNavigate();
    const [Jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [filter_ContentCreation, setfilter_ContentCreation] = useState(false);
    const [filter_SEO_SIM, setfilter_SEO_SIM] = useState(false);
    const [filter_Graphic_Design, setfilter_Graphic_Design] = useState(false);
    useEffect(() => {
        setLoading(true);
        const FetchJobs = async ({ setJobs, setLoading, setError }) => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://localhost:3000/Freelancers/Jobs`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                console.log("response from get Jobs", response);
                if (response.status == 200) {
                    const Jobs = response.data.Jobs;
                    setJobs(Jobs);
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
        FetchJobs({ setJobs, setLoading, setError });
    }, []);

    if (loading) {
        return (
            <div className=" w-screen h-[80vh] flex flex-col items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <div className=" flex ">
            <div className=" w-[250px] shrink-0 pt-6 pl-3 text-gray_v">
                <div>
                    <div className=" border rounded-xl  flex items-center gap-2 px-2 py-2">
                        <div>
                            <img
                                src={searchIcon}
                                alt=""
                                className=" cursor-pointer"
                            />
                        </div>
                        <input type="text" />
                    </div>
                    <div className="text-gray_v pt-8">
                        <div className=" text-lg font-semibold">Filter</div>
                        <div className="text-sm pt-4">
                            <div className=" font-semibold">Job Title </div>
                            <div className=" pt-2 flex flex-col gap-2 mb-4">
                                <div className=" flex gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filter_ContentCreation}
                                    />
                                    <div>Content creation</div>
                                </div>
                                <div className=" flex gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filter_SEO_SIM}
                                    />
                                    <div>SEO / CEO</div>
                                </div>
                                <div className=" flex gap-2">
                                    <input
                                        type="checkbox"
                                        checked={filter_Graphic_Design}
                                    />
                                    <div>Graphic designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          <div className=" bg-perpol_v w-fit mx-auto py-1 px-2 rounded-lg
                 text-white font-semibold cursor-pointer text-lg">
                    Filter
                </div>
            </div>
            <div className=" w-full px-6 py-6">
                {Jobs.length == 0 ? (
                    <div className=" w-full h-[80vh] flex items-center justify-center">
                        <div className=" text-lg">No jobs found</div>
                    </div>
                ) : (
                    Jobs.map((job) => {
                        return (
                            <div className=" border rounded-xl p-2 my-2">
                                <div className="text-lg font-semibold">
                                    {job.title}
                                </div>
                                <div className="text-gray_v">
                                    {job.description}
                                </div>
                                <div className="text-gray_v">
                                    Budget: {job.budget}
                                </div>
                                <div className="text-gray_v">
                                    Duration: {job.duration}
                                </div>
                                <div className="text-gray_v">
                                    Posted at: {job.postedAt}
                                </div>
                                <div className="text-gray_v">
                                    Posted by: {job.postedBy}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Freelancer_jobs;
