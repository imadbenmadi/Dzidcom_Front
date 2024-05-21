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
                                id="Step0_image"
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
                                            .getElementById("Step0_image")
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
                            Profil 10% Completed ✅
                        </div>
                        {/* <div className=" flex flex-col gap-1 pt-2 text-sm font-semibold text-gray_v">
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                            <div>{user.email}</div>
                        </div> */}
                    </div>
                </div>
                {/* Progress*/}
                <div className=" flex items-center justify-start gap-5">
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_v "></div>
                </div>
                <div className=" mb-6">
                    <div className=" font-semibold text-lg text-gray_v pb-6">
                        1 - Basic Informations
                    </div>
                    <Formik
                        initialValues={{
                            userId: user.id,
                            firstName: user.firstName || "",
                            lastName: user.lastName || "",
                            email: user.email || "",
                        }}
                        validate={(values) => {
                            const errors = {};

                            if (!values.firstName) {
                                errors.firstName = "first Name is Required";
                            } else if (values.firstName.length < 3)
                                errors.firstName = "at least 3 chars";
                            else if (values.firstName.length > 50)
                                errors.firstName = "Max 50 chars";

                            if (!values.lastName) {
                                errors.lastName = "last Name is Required";
                            } else if (values.lastName.length < 3)
                                errors.lastName = "at least 3 chars";
                            else if (values.lastName.length > 50)
                                errors.lastName = "Max 50 chars";
                            if (!values.email) {
                                errors.email = "email is Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // if (
                            //     values.lastName ==
                            //         user.lastName &&
                            //     values.firstName == user.firstName &&
                            //     values.email == user.email
                            // ) {
                            //     return;
                            // }
                            // else {
                            handleEdite(
                                values,
                                user,
                                set_user,
                                "/Freelancer/Complete_Profile/Step_1",
                                {
                                    setSubmitting,
                                }
                            );
                            // }
                        }}
                    >
                        {({ isSubmitting, setFieldValue }) => (
                            <Form className="  flex flex-col text-sm md:text-lg  gap-9 text-black_text">
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        First Name{" "}
                                    </div>
                                    <Field
                                        placeholder="Prénom"
                                        type="text"
                                        name="firstName"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        Last Name
                                    </div>
                                    <Field
                                        placeholder="nom de famille"
                                        type="text"
                                        name="lastName"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        Email
                                    </div>
                                    <div className=" flex items-center">
                                        <Field
                                            placeholder="example@gmail.com"
                                            type="text"
                                            name="email"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-4 py-2  rounded-lg text-sm  w-full"
                                        />
                                    </div>

                                    <ErrorMessage
                                        name="email"
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