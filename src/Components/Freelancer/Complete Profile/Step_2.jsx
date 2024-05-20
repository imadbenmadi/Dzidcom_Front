import React from "react";
import user_default from "../../../../public/Profile/user_default.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppContext } from "../../../AppContext";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { IoClose } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import handleEdite from "./Post_EditUser";

function Step_2() {
    const [image_state, setimage_state] = useState(null);
    const { user, set_user } = useAppContext();
    const skillsOptions = [
        "Graphic Design",
        "Logo Design",
        "UI/UX Design",
        "Web Design",
        "Illustration",
        "Typography Design",
        "Motion Graphics",
        "Video Editing",
        "Animation",
        "Content Creation",
        "Copywriting",
        "Creative Writing",
        "Blog Writing",
        "Article Writing",
        "SEO Writing",
        "Social Media Management",
        "Content Strategy",
        "Content Marketing",
        "Search Engine Optimization (SEO)",
        "Digital Marketing",
    ];
    console.log("user Skills from the server : ", user.Skills);
    const Skills_from_Server = user.Skills.map((skill) => skill.skill);
    const [selectedSkills, setSelectedSkills] = useState(
        Skills_from_Server || []
    );
    const [availableSkills, setAvailableSkills] = useState(skillsOptions);
    const [customSkill, setCustomSkill] = useState("");

    const handleSkillChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedSkills([...selectedSkills, selectedValue]);
        setAvailableSkills(
            availableSkills.filter((skill) => skill !== selectedValue)
        );
    };

    const handleRemoveSkill = (skill) => {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        setAvailableSkills([...availableSkills, skill]);
    };

    const handleAddCustomSkill = () => {
        if (customSkill.trim() !== "") {
            setSelectedSkills([...selectedSkills, customSkill]);
            setCustomSkill("");
        }
    };

    return (
        <div className="  flex flex-col items-center justify-center  mt-6 gap-6 ">
            <div className="max-w-[300px] md:max-w-[500px] flex flex-col gap-6  ">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-12 w-full ">
                    <div className=" order-2 md:order-1">
                        <div className=" w-full">
                            <input
                                id="Step1_image"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(event) => {
                                    setimage_state(
                                        event.currentTarget.files[0]
                                    );
                                }}
                                // disabled={isSubmitting}
                                className="hidden" // Hide the default file input button
                            />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            {image_state ? (
                                <div className=" relative ">
                                    <img
                                        src={URL.createObjectURL(image_state)} // Create a URL for the selected image
                                        alt="Selected Image"
                                        className=" w-[150px] h-[150px]  object-cover rounded-full"
                                    />
                                    <div
                                        className="  mt-2 text-white w-fit mx-auto rounded-lg px-3 font-semibold text-lg
                                         bg-gray-400 cursor-pointer"
                                        onClick={() => setimage_state(null)}
                                    >
                                        {/* <IoClose /> */}
                                        Remove
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="w-[150px] h-[150px]  bg-gray_white text-gray rounded-full flex items-center justify-center cursor-pointer"
                                    onClick={() =>
                                        document
                                            .getElementById("Step1_image")
                                            .click()
                                    }
                                >
                                    <FaRegImage className=" text-gray_v text-2xl" />
                                </div>
                            )}{" "}
                        </div>
                    </div>
                    <div className=" order-1  md:order-2">
                        <div className=" font-semibold text-gray_v pt-6">
                            Profil 20% Completed ✅
                        </div>
                        <div className=" flex flex-col gap-1 pt-2 text-sm font-semibold text-gray_v">
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
                </div>
                {/* Progress*/}
                <div className=" flex items-center justify-start gap-5">
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_b_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_b_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                </div>
                <div className=" mb-6">
                    <div className=" font-semibold text-lg text-gray_v pb-6">
                        2 - Areas of Expertise{" "}
                    </div>
                    <Formik
                        initialValues={{
                            userId: user.id,
                            about: user.about || "",
                            Skills: Skills_from_Server || [],
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.about) {
                                errors.about = "about is Required";
                            } else if (values.about.length < 10)
                                errors.about = "at least 10 chars";
                            else if (values.about.length > 500)
                                errors.about = "max 500 chars";

                            if (values.Skills.length === 0) {
                                errors.Skills = "Skills are required";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // if (
                            //     values.about ==
                            //         user.about &&
                            //     values.telephone == user.telephone &&
                            //     values.Skills == Skills_from_Server
                            // ) {
                            //     return;
                            // }
                            // else {
                            handleEdite(values, user, set_user, {
                                setSubmitting,
                            });
                            // }
                        }}
                    >
                        {({ isSubmitting, setFieldValue, values, errors }) => (
                            <Form className="  flex flex-col text-sm md:text-lg  gap-9 text-black_text">
                                <div className=" relative">
                                    <div className="relative">
                                        <div className="font-semibold text-sm pb-1">
                                            Skills
                                        </div>
                                        <select
                                            name="Skills"
                                            onChange={(e) => {
                                                handleSkillChange(e);
                                                setFieldValue("Skills", [
                                                    ...selectedSkills,
                                                    e.target.value,
                                                ]);
                                            }}
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-4 py-2 rounded-lg text-sm w-full "
                                        >
                                            <option
                                                value=""
                                                className=" text-sm font-semibold  "
                                            >
                                                Select a skill
                                            </option>
                                            {availableSkills.map((skill) => (
                                                <option
                                                    key={skill}
                                                    value={skill}
                                                    className=" text-sm font-semibold  "
                                                >
                                                    {skill}
                                                </option>
                                            ))}
                                        </select>
                                        <ErrorMessage
                                            name="Skills"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div>
                                        <ul className=" pt-2 flex flex-wrap items-center justify-start gap-4">
                                            {selectedSkills.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="bg-perpol_v text-white px-2 py-1 rounded-lg flex items-center justify-center gap-1"
                                                >
                                                    {skill}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveSkill(
                                                                skill
                                                            )
                                                        }
                                                        className="ml-1 text-sm font-semibold 
                                                         text-white rounded-full w-4 h-4 flex items-center justify-center "
                                                    >
                                                        <IoClose className=" md:font-semibold md:text-xl"/>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        Tell us About your Self{" "}
                                    </div>
                                    <Field
                                        placeholder="Tell us about your self"
                                        as="textarea"
                                        rows={7}
                                        name="about"
                                        disabled={isSubmitting}
                                        className=" resize-none border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="about"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>

                                {isSubmitting ? (
                                    <span className="small-loader  w-full m-auto"></span>
                                ) : (
                                    <button
                                        type="submit"
                                        className=" bg-perpol_v py-2 rounded-2xl text-white font-semibold "
                                        disabled={isSubmitting}
                                    >
                                        Continue
                                    </button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

const errorInputMessage = {
    position: "absolute",
    bottom: "-22px",
    left: "5px",
    fontSize: "12px",
    color: "red",
};
export default Step_2;
