import React from "react";
import user_default from "../../../../public/Profile/user_default.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppContext } from "../../../AppContext";
import { useState, useEffect } from "react";

import { FaRegImage } from "react-icons/fa";
import handleEdite from "./Post_EditUser";

function Step_1() {
    const [image_state, setimage_state] = useState(null);
    const { user, set_user } = useAppContext();

    // useEffect(() => {
    //     console.log(image_state);
    // }, [image_state]);
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
                                className="hidden"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            {image_state ? (
                                <div className=" relative ">
                                    <img
                                        src={URL.createObjectURL(image_state)}
                                        alt="Selected Image"
                                        className=" w-[150px] h-[150px]  object-cover rounded-full"
                                    />
                                    <div
                                        className="  mt-2 text-white w-fit mx-auto rounded-lg px-3 font-semibold text-lg
                                         bg-gray-400 cursor-pointer"
                                        onClick={() => setimage_state(null)}
                                    >
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
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                </div>
                <div className=" mb-6">
                    <div className=" font-semibold text-lg text-gray_v pb-6">
                        2 - Personal information{" "}
                    </div>
                    <Formik
                        initialValues={{
                            userId: user.id,
                            telephone: user.telephone || "",
                            nationalCardNumber: user.nationalCardNumber || "",
                            JobTitle: user.JobTitle || "",
                        }}
                        validate={(values) => {
                            const errors = {};

                            if (!values.telephone) {
                                errors.telephone = "telephone is Required";
                            } else if (
                                values.telephone.length < 9 ||
                                values.telephone.length > 14
                            )
                                errors.telephone = "invalide phone number";
                            else if (
                                !/^(\+\d{1,3}[-\s]?)?\d+$/.test(
                                    values.telephone
                                )
                            )
                                errors.telephone = "invalide phone number";
                            if (!values.nationalCardNumber) {
                                errors.nationalCardNumber =
                                    "Last Name is Required";
                            } else if (!/^\d+$/.test(values.nationalCardNumber))
                                errors.nationalCardNumber =
                                    "National Card Number must be a number";
                            else if (values.nationalCardNumber.length < 10)
                                errors.nationalCardNumber =
                                    " At least 10 chars";
                            if (!values.JobTitle) {
                                errors.JobTitle = "Job Title is Required";
                            } else if (values.JobTitle.length < 3)
                                errors.JobTitle = "At least 3 chars";
                            else if (values.JobTitle.length > 50)
                                errors.JobTitle = "Max 50 chars";
                            else if (!isNaN(Number(values.JobTitle))) {
                                errors.JobTitle =
                                    "Job title cannot be a number";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (values.telephone == user.telephone) {
                                delete values.telephone;
                            } else if (
                                values.nationalCardNumber ==
                                user.nationalCardNumber
                            ) {
                                delete values.nationalCardNumber;
                            } else if (values.JobTitle == user.JobTitle) {
                                delete values.JobTitle;
                            }
                            if (Object.keys(values).length >= 1)
                                handleEdite(
                                    values,
                                    user,
                                    set_user,
                                    "/Freelancer/Complete_Profile/Step_2",
                                    {
                                        setSubmitting,
                                    }
                                );
                            else {
                                setSubmitting(false);
                                window.location.href("/Freelancer/Complete_Profile/Step_2")
                            }
                        }}
                    >
                        {({ isSubmitting, setFieldValue }) => (
                            <Form className="  flex flex-col text-sm md:text-lg  gap-9 text-black_text">
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        Phone Number{" "}
                                    </div>
                                    <Field
                                        placeholder="0655665566"
                                        type="text"
                                        name="telephone"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="telephone"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        National Card Number{" "}
                                    </div>
                                    <Field
                                        placeholder="••••••••••••••••••••••••••••••••••••••••"
                                        type="text"
                                        name="nationalCardNumber"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="nationalCardNumber"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        Job Title{" "}
                                    </div>
                                    <div className=" flex items-center">
                                        <Field
                                            placeholder="Designer, Developer, Writer, etc."
                                            type="text"
                                            name="JobTitle"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-4 py-2  rounded-lg text-sm  w-full"
                                        />
                                    </div>

                                    <ErrorMessage
                                        name="JobTitle"
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
export default Step_1;
