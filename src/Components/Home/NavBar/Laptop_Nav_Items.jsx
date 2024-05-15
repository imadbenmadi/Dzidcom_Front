import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
function Laptop_Nav_Items() {
    return (
        <div className="hidden  md:flex  items-center justify-between mx-12 md:gap-12 lg:gap-24 text-md text-black_text h-full p-2 ">
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
                <div className=" md:hover:text-green_v transition-colors cursor-pointer">
                    <Link
                        to={"/"}
                        className={
                            "text-black_text md:hover:text-green_v select-none"
                        }
                    >
                        Home
                    </Link>
                </div>
                <div className=" md:hover:text-green_v transition-colors cursor-pointer">
                    <Link
                        to={"/Blogs"}
                        className={
                            "text-black_text md:hover:text-green_v select-none"
                        }
                    >
                        Blogs
                    </Link>
                </div>
                <div className="  transition-colors cursor-pointer">
                    <Link
                        to={"/Contact"}
                        className="text-black_text md:hover:text-green_v select-none"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className=" md:hover:text-green_v transition-colors cursor-pointer">
                    <Link
                        to={"/About"}
                        className="text-black_text md:hover:text-green_v select-none"
                    >
                        About Us
                    </Link>
                </div>
                <div className=" md:hover:text-green_v transition-colors cursor-pointer">
                    <Link
                        to={"/FAQ"}
                        className="text-black_text md:hover:text-green_v select-none"
                    >
                        FAQ
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center h-full">
                <div className=" flex items-center justify-center gap-3">
                    <span className=" text-black_text  text-md rounded-lg cursor-pointer">
                        <Link to={"/Login"} className="select-none">
                            Login
                        </Link>
                    </span>
                    <span className=" w-[2px] h-5  bg-white"></span>
                    <span className="bg-perpol_v text-[#fff] px-3 py-2 text-md rounded-xl cursor-pointer">
                        <Link to={"/Register"} className="select-none">
                            Sign up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Laptop_Nav_Items;
