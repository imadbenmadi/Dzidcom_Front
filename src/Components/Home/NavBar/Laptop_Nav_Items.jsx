import { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";

import { useAppContext } from "../../../AppContext";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Logo from "../../../../public/Logo.png";
// import Logout_icon from "../../../../public/Logout.svg";
// import notification from "../../../../public/notification.svg";
import user from "../../../../public/user1.png";
function Laptop_Nav_Items({ isAuth, FirstName, Logout, LogoutClicked }) {
    const { Notifications, _id } = useAppContext();
    const [Profile_menu_open, setProfile_menu_open] = useState(false);
    const toogle_Profile_menu_open = () => {
        setProfile_menu_open(!Profile_menu_open);
    };
    // const [unReaded_Notif, SetunReaded_Notif] = useState(false);
    // useEffect(() => {
    //     if (isAuth && Notifications) {
    //         const hasUnreadNotification = Notifications.some(
    //             (notification) => !notification.Readed
    //         );
    //         SetunReaded_Notif(hasUnreadNotification);
    //     }
    // }, [Notifications]);
    return (
        <div className="hidden  md:flex  items-center justify-center md:gap-12 lg:gap-24 text-md text-black_text h-full p-2 ">
            <div>
                <Link to={"/"} className="select-none">
                    <img
                        src={Logo}
                        alt="Logo"
                        className=" w-[100px] lg:w-[135px] "
                    />
                </Link>
            </div>
            <div className="flex gap-6 lg:gap-12">
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/"}
                        className={"text-black_text hover:text-green select-none"}
                    >
                        Home
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Blogs"}
                        className={"text-black_text hover:text-green select-none"}
                    >
                        Blogs
                    </Link>
                </div>
                <div className="  transition-colors cursor-pointer">
                    <Link
                        to={"/Contact"}
                        className="text-black_text hover:text-green select-none"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/About"}
                        className="text-black_text hover:text-green select-none"
                    >
                        About Us
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/FAQ"}
                        className="text-black_text hover:text-green select-none"
                    >
                        FAQ
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center h-full">
                {isAuth ? (
                    <>
                        <div className=" flex items-center justify-center gap-3">
                            <div
                                // to={`/Profile/${_id}`}
                                className="select-none h-full cursor-pointer flex items-center justify-center gap-1 relative"
                                onClick={() => toogle_Profile_menu_open(true)}
                            >
                                Profile
                                {Profile_menu_open ? (
                                    <FaAngleUp className="text-gray_white text-md  h-full" />
                                ) : (
                                    <FaAngleDown className="text-gray_white text-md  h-full" />
                                )}
                                {Profile_menu_open && (
                                    <div
                                        className="absolute py-2 md:bottom-[-132px]   lg:bottom-[-136px]  
                                        bg-white w-[160px] shadow-md rounded border border-gray_white flex flex-col items-start"
                                    >
                                        <Link
                                            to={`/Profile/${_id}`}
                                            className="select-none flex items-center gap-3 pl-4 mb-1 "
                                        >
                                            <img src={user} alt="" />{" "}
                                            <span className=" font-semibold text-gray text-md">
                                                Profile
                                            </span>
                                        </Link>
                                        <div className="bg-gray_white w-full h-[1px] my-1"></div>
                                        <Link
                                            to={`/Profile/${_id}`}
                                            className="select-none flex items-center gap-3 pl-4 mb-1 "
                                        >
                                            {/* <img src={notification} alt="" />{" "} */}
                                            <span className=" font-semibold text-gray text-md">
                                                Notifications
                                            </span>
                                        </Link>
                                        <div className="bg-gray_white w-full h-[1px] my-1"></div>
                                        <>
                                            {!LogoutClicked ? (
                                                <div
                                                    className="text-red-500 rounded-b-xl flex items-center gap-2 pl-4  cursor-pointer"
                                                    onClick={() => {
                                                        Logout();
                                                        setProfile_menu_open(
                                                            false
                                                        );
                                                    }}
                                                >
                                                    {/* <img
                                                        src={Logout_icon}
                                                        alt=""
                                                    /> */}
                                                    Logout
                                                </div>
                                            ) : (
                                                <div className=" w-full flex items-center justify-center  text-red-500 m-auto">
                                                    <span className="small-loader  w-full m-auto"></span>
                                                </div>
                                            )}
                                        </>
                                    </div>
                                )}
                            </div>
                            <span className=" w-[2px] h-5 rounded-lg bg-white"></span>
                            <span className="bg-green text-[#fff] px-3 py-1 text-md rounded-lg cursor-pointer">
                                <Link to={"/Dashboard"} className="select-none">
                                    Dashboard
                                </Link>
                            </span>
                        </div>
                    </>
                ) : (
                    <div className=" flex items-center justify-center gap-3">
                        <span className=" text-[#fff]  text-md rounded-lg cursor-pointer">
                            <Link to={"/Login"} className="select-none">
                                Sign in
                            </Link>
                        </span>
                        <span className=" w-[2px] h-5  bg-white"></span>
                        <span className="bg-green text-[#fff] px-3 py-1 text-md rounded-lg cursor-pointer">
                            <Link to={"/Register"} className="select-none">
                                Get Started
                            </Link>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Laptop_Nav_Items;
