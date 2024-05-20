import React from "react";
import user_default from "../../../../public/Profile/user_default.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppContext } from "../../../AppContext";
import { useState, useEffect } from "react";

import { IoClose } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import handleEdite from "./Post_EditUser";

function Step_1() {
    const [image_state, setimage_state] = useState(null);
    const { user, set_user } = useAppContext();
    useEffect(() => {
        console.log(image_state);
    }, [image_state]);
    return (
        <div className="  flex flex-col items-center justify-center  mt-6 gap-6 ">
            <div className="w-fit flex flex-col gap-6  ">
                <div className=" flex items-start justify-start gap-12 w-full ">
                    <div>
                        <div className="w-full">
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

                        {/* <img
                            src={user_default}
                            alt=""
                            className=" w-[120px] cursor-pointer"
                        /> */}
                    </div>
                    <div>
                        <div className=" font-semibold text-gray_v pt-6">
                            Profil 20% Completed ✅
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
                        1 - Personal information{" "}
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
                            // if (
                            //     values.nationalCardNumber ==
                            //         user.nationalCardNumber &&
                            //     values.telephone == user.telephone &&
                            //     values.JobTitle == user.JobTitle
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
                                        type="nationalCardNumber"
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
