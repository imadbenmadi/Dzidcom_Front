import { Link } from "react-router-dom";

function Mobile_Nav_Items({ MobileNav_Open, Toogle_Menu_Bar }) {
    return (
        <div className="flex md:hidden">
            <div
                className={`  ${
                    MobileNav_Open
                        ? " translate-x-[0vw]"
                        : " translate-x-[200vh] "
                } absolute   transition-transform duration-300 select-none w-[100vw]
                  z-50    text-black_text font-semibold bg-white `}
            >
                <div className=" w-[90%] ml-6 h-screen text-xl  mt-12 ">
                    <div className=" flex flex-col justify-start h-[80%] ">
                        <div className="flex flex-col mb-2 justify-around ">
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Register"}
                                className="select-none bg-blue_v  px-3 py-2 rounded-lg"
                            >
                                Sign up
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Login"}
                                className="select-none   px-3 py-2 rounded-lg "
                            >
                                Sign in
                            </Link>
                        </div>
                        <div className=" w-full h-1 bg-gray_v "></div>
                        <div>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/"}
                                className="select-none flex gap-2 mb-4 w-[120px] ml-6 mt-6   "
                            >
                                {/* <AiFillHome className=" text-2xl" /> */}
                                Home
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Blogs"}
                                className="select-none flex  gap-2 mb-4 w-[120px] ml-6 mt-6   "
                            >
                                {/* <RiArticleFill className=" text-3xl" /> */}
                                Blogs
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Contact"}
                                className="select-none flex   gap-2 mb-4 w-[120px] ml-6 mt-6  "
                            >
                                {/* <IoCall className=" text-3xl" /> */}
                                Contact Us
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/About"}
                                className="select-none flex gap-2 mb-4 w-[120px] ml-6 mt-6   "
                            >
                                {/* <FaRegHandshake className=" text-3xl" /> */}
                                About us
                            </Link>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/FAQ"}
                                className="select-none flex items-center   gap-2  mb-4 w-[120px] ml-6 mt-6   "
                            >
                                {/* <FaBook className=" text-2xl" /> */}
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobile_Nav_Items;
