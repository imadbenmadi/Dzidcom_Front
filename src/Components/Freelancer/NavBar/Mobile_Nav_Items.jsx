import { Link } from "react-router-dom";

function Mobile_Nav_Items({
    MobileNav_Open,
    Toogle_Menu_Bar,
    isProfileCompleted,
    Active_nav,
}) {
    return (
        <div className="flex md:hidden">
            <div
                className={`  ${
                    MobileNav_Open
                        ? " translate-x-[0vw]"
                        : " translate-x-[200vh] "
                } absolute   transition-transform duration-300 select-none w-[100vw]
                  z-50    text-black_text  bg-white `}
            >
                <div className="  h-screen text-xl  pt-8 overflow-y-auto ">
                    <div className=" flex flex-col justify-start items-center h-[80%]  ">
                        <div className="text-center flex flex-col gap-8 my-8 ">
                            {!isProfileCompleted && (
                                <Link
                                    onClick={Toogle_Menu_Bar}
                                    to={"/Freelancer/Complete_Profile"}
                                    className={`${
                                        Active_nav == "Complete_Profile"
                                            ? "text-perpol_v"
                                            : "text-black_text"
                                    } select-none    `}
                                >
                                    <span className=" relative">
                                        Complete profil
                                        <span className=" absolute top-[-3px] right-[-9px] h-3 w-3 rounded-full bg-red-500 "></span>{" "}
                                    </span>
                                </Link>
                            )}
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Freelancer/Profile"}
                                className={`${
                                    Active_nav == "Profile"
                                        ? "text-perpol_v"
                                        : "text-black_text"
                                } select-none   `}
                            >
                                Profile
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Freelancer/Jobs"}
                                className={`${
                                    Active_nav == "Jobs"
                                        ? "text-perpol_v"
                                        : "text-black_text"
                                } select-none   `}
                            >
                                Jobs
                            </Link>
                        </div>
                        <div className=" w-screen h-[2px] bg-gray_white "></div>
                        <div className="text-center pt-7">
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Process"}
                                className={`${
                                    Active_nav == "Process"
                                        ? "text-perpol_v"
                                        : "text-black_text"
                                } select-none   `}
                            >
                                Process
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobile_Nav_Items;