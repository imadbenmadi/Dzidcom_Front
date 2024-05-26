import React from "react";
import user_default from "../../../../public/Profile/user_default.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppContext } from "../../../AppContext";
import handleEdite from "./API/Post_EditUser";

function Step_1() {
    const { user, set_user, isProfileCompleted } = useAppContext();
    if (!user || !set_user) return null;
    return (
        <div className=" flex flex-col items-center justify-center  mt-6 gap-6 ">
            <div className="w-full px-6 md:max-w-[500px]  flex flex-col gap-6  ">
                <div className=" flex items-center justify-start gap-12 w-full ">
                    <div>
                        <img
                            src={user_default}
                            alt=""
                            className=" w-[120px] cursor-pointer"
                        />
                    </div>
                    <div className=" order-1  md:order-2">
                        {(!isProfileCompleted ||
                            !user.instgram_Link ||
                            !user.linkedIn_Link ||
                            !user.facebook_Link ||
                            !user.portfolioWebsite) && (
                            <div className=" font-semibold text-gray_v pt-6">
                                Profil 80% Completed ✅
                            </div>
                        )}

                        <div className=" flex flex-col gap-1 pt-2 text-sm font-semibold text-gray_v">
                            <div>{user?.firstName}</div>
                            <div>{user?.lastName}</div>
                            <div>{user?.email}</div>
                        </div>
                    </div>
                </div>
                {/* Progress*/}
                <div className=" flex items-center justify-start gap-5">
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_b_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_b_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_b_v "></div>
                    <div className=" w-[100px] h-2 rounded-lg bg-Rose_b_v "></div>
                </div>
                <div className=" mb-6">
                    <div className=" font-semibold text-lg text-gray_v pb-6">
                        5 - Links and Social Media{" "}
                        <span className=" text-sm font-semibold text-gray_v">
                            (optional)
                        </span>
                    </div>
                    <Formik
                        initialValues={{
                            userId: user.id,
                            portfolioWebsite: user.portfolioWebsite || "",
                            instgram_Link: user.instgram_Link || "",
                            linkedIn_Link: user.linkedIn_Link || "",
                            facebook_Link: user.facebook_Link || "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (
                                values.portfolioWebsite == user.portfolioWebsite
                            ) {
                                delete values.portfolioWebsite;
                            } else if (
                                values.instgram_Link == user.instgram_Link
                            ) {
                                delete values.instgram_Link;
                            } else if (
                                values.linkedIn_Link == user.linkedIn_Link
                            ) {
                                delete values.linkedIn_Link;
                            } else if (
                                values.facebook_Link == user.facebook_Link
                            ) {
                                delete values.facebook_Link;
                            }
                            if (Object.keys(values).length >= 1)
                                handleEdite(
                                    values,
                                    set_user,
                                    "/Freelancer/Profile",
                                    image_state ? image_state : null,
                                    {
                                        setSubmitting,
                                    }
                                );
                            else {
                                setSubmitting(false);
                                window.location.href("/Freelancer/Profile");
                            }
                        }}
                    >
                        {({ isSubmitting, setFieldValue }) => (
                            <Form className="  flex flex-col text-sm md:text-lg  gap-9 text-black_text">
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        Portfolio Website{" "}
                                    </div>
                                    <Field
                                        placeholder="https://www.example.com"
                                        type="text"
                                        name="portfolioWebsite"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="portfolioWebsite"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        your Instgram account Link
                                    </div>
                                    <Field
                                        placeholder="https://www.example.com"
                                        type="instgram_Link"
                                        name="instgram_Link"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="instgram_Link"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>

                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        your LinkedIn account Link
                                    </div>
                                    <Field
                                        placeholder="https://www.example.com"
                                        type="linkedIn_Link"
                                        name="linkedIn_Link"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="linkedIn_Link"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" relative">
                                    <div className=" font-semibold text-sm pb-1">
                                        your Facebook account Link
                                    </div>
                                    <Field
                                        placeholder="https://www.example.com"
                                        type="facebook_Link"
                                        name="facebook_Link"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-4 py-2 rounded-lg  text-sm  w-full"
                                    />
                                    <ErrorMessage
                                        name="facebook_Link"
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
