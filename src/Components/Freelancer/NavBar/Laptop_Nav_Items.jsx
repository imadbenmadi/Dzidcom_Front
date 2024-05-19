import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
import message_icon from "../../../../public/Profile/message.png";
import notification_icon from "../../../../public/Profile/Notification.png";
import user_image from "../../../../public/user2.png";
function Laptop_Nav_Items({ isProfileCompleted }) {
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
            <div className="flex gap-6 lg:gap-12">
                {!isProfileCompleted ? (
                    <div className=" md:hover:text-perpol_v transition-all duration-150  cursor-pointer">
                        <Link
                            to={"/Freelancer/Profile"}
                            className={
                                " md:hover:text-perpol_v transition-all duration-150 select-none"
                            }
                        >
                            <span className=" relative">
                                Complete profil
                                <span className=" absolute top-[-3px] right-[-9px] h-3 w-3 rounded-full bg-red-500 "></span>{" "}
                            </span>
                        </Link>
                    </div>
                ) : null}

                <div className=" md:hover:text-perpol_v transition-all duration-150  cursor-pointer">
                    <Link
                        to={"/Freelancer/Profile"}
                        className={
                            " md:hover:text-perpol_v transition-all duration-150 select-none"
                        }
                    >
                        Profil{" "}
                    </Link>
                </div>
                <div className=" md:hover:text-perpol_v transition-all duration-150  cursor-pointer">
                    <Link
                        to={"/Freelancer/jobs"}
                        className=" md:hover:text-perpol_v transition-all duration-150 select-none"
                    >
                        Ask for work
                    </Link>
                </div>

                <div className=" md:hover:text-perpol_v transition-all duration-150  cursor-pointer">
                    <Link
                        to={"/Freelancer/Process"}
                        className=" md:hover:text-perpol_v transition-all duration-150 select-none"
                    >
                        Process
                    </Link>
                </div>
            </div>
            {!isProfileCompleted ? (
                <div className="flex items-center justify-center gap-6 lg:gap-12">
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
                <div></div>
            )}
        </div>
    );
}

export default Laptop_Nav_Items;
