import React from "react";
import Register_image from "../../../../public/Register.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import handleRegister from "./Post_Register";
import { useState } from "react";
function Register() {
    const [userType_value, setuserType_value] = useState("freelancer");
    function handle_change_UserType(value) {
        setuserType_value(value);
    }
    return (
        <div className="flex">
            <div className=" max-w-[350px] lg:max-w-full hidden md:block shrink-0  h-[calc(100vh)]">
                <img
                    src={Register_image}
                    alt="Login"
                    className=" w-full h-full object-cover "
                />
            </div>
            <div className="w-full h-screen bg-white flex flex-col items-center justify-center ">
                <div className=" w-[80%] text-black_text">
                    <div className=" pb-4 ">
                        <div className=" text-3xl font-semibold ">
                            Create an account
                        </div>
                        <div>Let’s get started your freelance journey.</div>
                    </div>

                    <div>
                        <Formik
                            initialValues={{
                                userType: userType_value,
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                            }}
                            validate={(values) => {
                                const errors = {};

                                // Validate email
                                if (!values.email) {
                                    errors.email = "email is Required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email
                                    )
                                ) {
                                    errors.email = "Invalid email address";
                                }

                                // Validate password
                                if (!values.password) {
                                    errors.password = "password is Required";
                                } else if (values.password.length < 8) {
                                    errors.password =
                                        "password must be at least 8 characters long";
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                handleRegister(values, { setSubmitting });
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="  flex flex-col text-sm md:text-lg  gap-4 text-black_text">
                                    <div className="  flex items-center justify-center gap-4 md:gap-8 w-full text-gray_v">
                                        <div
                                            className={` cursor-pointer flex items-center justify-between gap-2  ${
                                                userType_value == "freelancer"
                                                    ? "border-2 border-perpol_v text-perpol_v"
                                                    : "border border-gray_white text-gray-400"
                                            } rounded-lg  text-base py-1 font-semibold px-4`}
                                            onClick={() =>
                                                handle_change_UserType(
                                                    "freelancer"
                                                )
                                            }
                                        >
                                            <div
                                                className={` w-4 h-4 rounded-full border-2 ${
                                                    userType_value ==
                                                    "freelancer"
                                                        ? "border-perpol_v"
                                                        : "border-gray_white"
                                                } flex items-center justify-center`}
                                            >
                                                {userType_value ==
                                                    "freelancer" && (
                                                    <div className=" w-2 h-2 rounded-full bg-perpol_v"></div>
                                                )}
                                            </div>
                                            <div>Freelancer</div>
                                        </div>
                                        <div
                                            className={` cursor-pointer flex items-center justify-between gap-2  ${
                                                userType_value == "client"
                                                    ? "border-2 border-perpol_v text-perpol_v"
                                                    : "border border-gray_white text-gray-400"
                                            } rounded-lg  text-base py-1 font-semibold px-4`}
                                            onClick={() =>
                                                handle_change_UserType(
                                                    "client"
                                                )
                                            }
                                        >
                                            <div
                                                className={` w-4 h-4 rounded-full border-2 ${
                                                    userType_value ==
                                                    "client"
                                                        ? "border-perpol_v"
                                                        : "border-gray_white"
                                                } flex items-center justify-center`}
                                            >
                                                {userType_value ==
                                                    "client" && (
                                                    <div className=" w-2 h-2 rounded-full bg-perpol_v"></div>
                                                )}
                                            </div>
                                            <div>Superviseur</div>
                                        </div>
                                    </div>
                                    <div className=" flex items-center justify-center gap-4 w-full ">
                                        <div className=" w-[50%]">
                                            <div className="  font-semibold text-sm pb-1">
                                                First Name
                                            </div>
                                            <Field
                                                placeholder="Prénom"
                                                type="text"
                                                name="firstName"
                                                disabled={isSubmitting}
                                                className="w-full border border-gray_white px-4 py-2 rounded-lg  text-sm "
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component="div"
                                                style={errorInputMessage}
                                            />
                                        </div>
                                        <div className="  w-[50%]">
                                            <div className="font-semibold text-sm pb-1">
                                                Last Name
                                            </div>
                                            <Field
                                                placeholder="Nom de famille"
                                                type="text"
                                                name="lastName"
                                                disabled={isSubmitting}
                                                className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                            />
                                            <ErrorMessage
                                                name="firstName"
                                                component="div"
                                                style={errorInputMessage}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className=" font-semibold text-sm pb-1">
                                            email{" "}
                                        </div>
                                        <Field
                                            placeholder="example.google@gmail.com"
                                            type="email"
                                            name="email"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div>
                                        <div className=" font-semibold text-sm pb-1">
                                            password{" "}
                                        </div>
                                        <div className=" flex items-center">
                                            <Field
                                                placeholder="•••••••••••••••••••"
                                                type="text"
                                                name="password"
                                                disabled={isSubmitting}
                                                className="border border-gray_white px-4 py-2  rounded-lg text-sm  w-full"
                                            />
                                        </div>

                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>

                                    {isSubmitting ? (
                                        <span className="small-loader my-5  w-full m-auto"></span>
                                    ) : (
                                        <button
                                            type="submit"
                                            className=" bg-perpol_v py-2 mt-4 rounded-2xl text-white font-semibold "
                                            disabled={isSubmitting}
                                        >
                                            Get Started
                                        </button>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};
export default Register;
