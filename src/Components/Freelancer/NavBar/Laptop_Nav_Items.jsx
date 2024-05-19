import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
import message_icon from "../../../../public/Profile/message.png";
import notification_icon from "../../../../public/Profile/Notification.png";
import user_image from "../../../../public/user2.png";
function Laptop_Nav_Items({ isProfileCompleted, Active_nav }) {
    return (
        <div className="hidden  md:flex  items-center justify-between mx-2 lg:mx-12  md:text-md lg:text-lg  font-[500] text-black_text h-full p-2 ">
            <div>
                <Link to={"/Freelancer"} className="select-none">
                    <img
                        src={Logo}
                        alt="Logo"
                        className=" w-[100px] lg:w-[135px] "
                    />
                </Link>
            </div>
            <div className="flex gap-6 lg:gap-14">
                {!isProfileCompleted ? (
                    <div
                        className={` ${
                            Active_nav == "Complete_Profile"
                                ? "text-perpol_v"
                                : "text-black_text"
                        } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
                    >
                        <Link
                            to={"/Freelancer/Complete_Profile"}
                            className={"select-none"}
                        >
                            <span className=" relative">
                                Complete profil
                                <span className=" absolute top-[-3px] right-[-9px] h-3 w-3 rounded-full bg-red-500 "></span>{" "}
                            </span>
                        </Link>
                    </div>
                ) : null}

                <div
                    className={` ${
                        Active_nav == "Profile"
                            ? "text-perpol_v"
                            : "text-black_text"
                    } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
                >
                    <Link to={"/Freelancer/Profile"} className={" select-none"}>
                        Profil{" "}
                    </Link>
                </div>
                <div
                    className={` ${
                        Active_nav == "Jobs"
                            ? "text-perpol_v"
                            : "text-black_text"
                    } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
                >
                    <Link to={"/Freelancer/Jobs"} className=" select-none">
                        Jobs
                    </Link>
                </div>

                <div
                    className={` ${
                        Active_nav == "Process"
                            ? "text-perpol_v"
                            : "text-black_text"
                    } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
                >
                    <Link to={"/Freelancer/Process"} className="  select-none">
                        Process
                    </Link>
                </div>
            </div>
            {isProfileCompleted ? (
                <div className="flex items-center justify-center gap-6 ">
                    <div>
                        <img src={message_icon} alt="" />
                    </div>
                    <div>
                        <img src={notification_icon} alt="" />
                    </div>
                    <div>
                        <img src={user_image} alt="" className=" w-8" />
                    </div>
                </div>
            ) : (
                <div className=" w-[4.5rem] lg:w-[7.9rem]"></div>
            )}
        </div>
    );
}

export default Laptop_Nav_Items;
