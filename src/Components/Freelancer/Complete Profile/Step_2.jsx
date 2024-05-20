import React from "react";
import user_default from "../../../../public/Profile/user_default.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Step_1() {
    return (
        <div className="  flex flex-col items-center justify-center  mt-6 gap-6 ">
            <div className="w-fit flex flex-col gap-6  ">
                <div className=" flex items-center justify-start gap-12 w-full ">
                    <div>
                        <img
                            src={user_default}
                            alt=""
                            className=" w-[120px] cursor-pointer"
                        />
                    </div>
                    <div>
                        <div className=" font-semibold text-gray_v">
                            Profil 40% Completed ✅
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
                            telephone: "",
                            nationalCardNumber: "",
                            JobTitle: "",
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
                            } else if (values.nationalCardNumber.length < 10)
                                errors.nationalCardNumber =
                                    " At least 10 chars";
                            if (!values.JobTitle) {
                                errors.JobTitle = "Job Title is Required";
                            } else if (values.JobTitle.length < 3)
                                errors.JobTitle = "At least 3 chars";
                            else if (values.JobTitle.length > 50)
                                errors.JobTitle = "Max 50 chars";
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            handleRegister(values, { setSubmitting });
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
