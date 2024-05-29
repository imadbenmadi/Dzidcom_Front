import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
import message_icon from "../../../../public/Profile/message.png";
import notification_icon from "../../../../public/Profile/Notification.png";
import user_default from "../../../../public/Profile/user_default2.png";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { useAppContext } from "../../../AppContext";
import { useNavigate } from "react-router-dom";

function Laptop_Nav_Items({
  isProfileCompleted,
  Active_nav,
  handleLogout,
  LogoutClicked,
}) {
  const Navigate = useNavigate();
  const { user } = useAppContext();
  const [ProfileClicked, setProfileClicked] = useState(false);
  const toogleProfile = () => {
    setProfileClicked(!ProfileClicked);
  };
  return (
    <div className="hidden  md:flex  items-center justify-between mx-2 lg:mx-12  md:text-md lg:text-lg  font-[500] text-black_text h-full p-2 ">
      <div>
        <Link to={"/Client"} className="select-none">
          <img src={Logo} alt="Logo" className=" w-[100px] lg:w-[135px] " />
        </Link>
      </div>
      <div className="flex gap-6 lg:gap-14">
        <div
          className={` ${
            Active_nav == "Complete_Profile"
              ? "text-perpol_v"
              : "text-black_text"
          } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
        >
          <Link to={"/Client/Complete_Profile"} className={"select-none"}>
            <span className=" relative">
              Modify profile{" "}
              {!isProfileCompleted ? (
                <span className=" absolute top-[-3px] right-[-9px] h-3 w-3 rounded-full bg-red-500 "></span>
              ) : null}
            </span>
          </Link>
        </div>

        <div
          className={` ${
            Active_nav == "Profile" ? "text-perpol_v" : "text-black_text"
          } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
        >
          <Link to={"/Client/Profile"} className={" select-none"}>
            Profil{" "}
          </Link>
        </div>
        <div
          className={` ${
            Active_nav == "Jobs" ? "text-perpol_v" : "text-black_text"
          } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
        >
          <Link to={"/Client/Jobs"} className=" select-none">
            Jobs
          </Link>
        </div>

        <div
          className={` ${
            Active_nav == "Process" ? "text-perpol_v" : "text-black_text"
          } md:hover:text-perpol_v transition-all duration-150  cursor-pointer`}
        >
          <Link to={"/Client/Process"} className="  select-none">
            Process
          </Link>
        </div>
      </div>
      <div className=" flex items center justify-center gap-5">
        {isProfileCompleted ? (
          <div className="flex items-center justify-center gap-6 ">
            <div>
              <img src={message_icon} alt="" />
            </div>
            <div>
              <img src={notification_icon} alt="" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className=" relative">
          {user?.profile_pic_link ? (
            <img
              src={user.profile_pic_link}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = user_default;
              }}
              alt=""
              className=" w-8 cursor-pointer"
              onClick={toogleProfile}
            />
          ) : (
            <img
              src={user_default}
              alt=""
              className=" w-8 cursor-pointer"
              onClick={toogleProfile}
            />
          )}

          {ProfileClicked ? (
            <div
              className="absolute top-10 right-0 bg-white shadow border  
                    rounded-lg p-2 w-40 z-50 flex items-center  flex-col gap-3"
            >
              <div
                className="text-black_text cursor-pointer w-[80px] "
                onClick={() => {
                  setProfileClicked(false);
                }}
              >
                <div
                  className=" select-none flex items-center gap-2 "
                  onClick={() => {
                    Navigate("/Client/Profile");
                    // window.location.href =
                    //     "/Client/Profile";
                  }}
                >
                  <FiUser className="  text-xl " />
                  Profil
                </div>
              </div>
              <div className="">
                {LogoutClicked ? (
                  <div className="w-full ">
                    <span className="small-loader font-bold  w-full m-auto"></span>
                  </div>
                ) : (
                  <div
                    className="cursor-pointer w-full 
                                    flex items-center gap-3 text-red-500"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <TbLogout2 className="  text-xl" />
                    Logout
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>{" "}
      </div>
    </div>
  );
}

export default Laptop_Nav_Items;
