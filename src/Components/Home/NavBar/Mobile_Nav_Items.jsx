import { FaRegHandshake } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../AppContext"; // Import your context hook
import { AiFillHome } from "react-icons/ai";

import { TbLogout } from "react-icons/tb";

function Mobile_Nav_Items({
    MobileNav_Open,
    Toogle_Menu_Bar,
    Logout,
    LogoutClicked,
}) {
    const { isAuth, _id } = useAppContext();

    return (
        <div className="flex md:hidden">
            <div
                className={`  ${
                    MobileNav_Open
                        ? " translate-x-[0vw]"
                        : " -translate-x-[200vh] "
                } absolute   transition-transform duration-300 select-none w-[100vw]  z-50 bg-perpol_b   text-black_text font-semibold `}
            >
                <div className=" w-[90%] ml-6 h-screen text-xl  mt-12 ">
                    <div className=" flex flex-col justify-between h-[80%] ">
                        <div>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/"}
                                className="select-none flex gap-2 mb-4 w-[120px] ml-6 mt-6 text-black_text hover:text-green "
                            >
                                {/* <AiFillHome className=" text-2xl" /> */}
                                Home
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Blogs"}
                                className="select-none flex  gap-2 mb-4 w-[120px] ml-6 mt-6 text-black_text hover:text-green "
                            >
                                {/* <RiArticleFill className=" text-3xl" /> */}
                                Blogs
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Contact"}
                                className="select-none flex   gap-2 mb-4 w-[120px] ml-6 mt-6text-black_text hover:text-green "
                            >
                                {/* <IoCall className=" text-3xl" /> */}
                                Contact Us
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/About"}
                                className="select-none flex gap-2 mb-4 w-[120px] ml-6 mt-6 text-black_text hover:text-green "
                            >
                                {/* <FaRegHandshake className=" text-3xl" /> */}
                                About us
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/FAQ"}
                                className="select-none flex items-center   gap-2  mb-4 w-[120px] ml-6 mt-6 text-black_text hover:text-green "
                            >
                                {/* <FaBook className=" text-2xl" /> */}
                                FAQ
                            </Link>
                        </div>
                        <div>
                            {isAuth ? (
                                <>
                                    <div className="flex mb-2 justify-around ">
                                        <Link
                                            onClick={Toogle_Menu_Bar}
                                            to={"/Dashboard"}
                                            className="select-none bg-blue bg-white text-black_text px-3 py-2 rounded-lg"
                                        >
                                            Dashboard
                                        </Link>
                                        {!LogoutClicked ? (
                                            <div
                                                className="text-black_text   flex items-center  gap-2  w-[120px] ml-6 "
                                                onClick={() => {
                                                    Logout();
                                                }}
                                            >
                                                <TbLogout />
                                                Logout
                                            </div>
                                        ) : (
                                            <div className=" w-full flex items-center justify-center   text-black_text">
                                                <span className="small-loader"></span>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="flex mb-2 justify-around ">
                                    <Link
                                        onClick={Toogle_Menu_Bar}
                                        to={"/Register"}
                                        className="select-none bg-blue bg-white text-black_text px-3 py-2 rounded-lg"
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        onClick={Toogle_Menu_Bar}
                                        to={"/Login"}
                                        className="select-none  text-[#fff] px-3 py-2 rounded-lg "
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* <div className=" w-full rounded-xl ml-6 mt-6 h-[2px]  bg-gray_white mb-4"></div> */}
                </div>
            </div>
        </div>
    );
}

export default Mobile_Nav_Items;
