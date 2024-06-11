import React from "react";
import { useState } from "react";
import Menu_Toogler from "./Menu_Toogler";
import Mobile_Nav_Items from "./Mobile_Nav_Items";
import { Link } from "react-router-dom";
import Logo from "../../../../public/Logo.png";
import message_icon from "../../../../public/Profile/message.png";
import notification_icon from "../../../../public/Profile/Notification.png";
function Mobile_Nav({ isProfileCompleted, Active_nav, handleLogout, LogoutClicked}) {
    const [MobileNav_Open, set_MobileNav_Open] = useState(false);
    function Toogle_Menu_Bar({ Active_nav }) {
        set_MobileNav_Open(!MobileNav_Open);
    }
    return (
        <>
            <div className=" flex gap-5 items-center justify-between mx-3 md:hidden h-full bg-white">
                <div>
                    <Link to={"/"} className="select-none">
                        <img
                            src={Logo}
                            alt="Logo"
                            className=" w-[110px] lg:w-[145px] "
                        />
                    </Link>
                </div>
                <div className=" flex items-center justify-center gap-4 md:gap-6">
                    {isProfileCompleted && (
                        <>
                            {/* <div>
                                <img src={message_icon} alt="" />
                            </div> */}
                            <div>
                                <img src={notification_icon} alt="" />
                            </div>
                        </>
                    )}
                    <Menu_Toogler
                        MobileNav_Open={MobileNav_Open}
                        set_MobileNav_Open={set_MobileNav_Open}
                        Toogle_Menu_Bar={Toogle_Menu_Bar}
                    />
                </div>
            </div>
            <Mobile_Nav_Items
                isProfileCompleted={isProfileCompleted}
                MobileNav_Open={MobileNav_Open}
                Toogle_Menu_Bar={Toogle_Menu_Bar}
                Active_nav={Active_nav}
                handleLogout={handleLogout}
                LogoutClicked={LogoutClicked}
            />
        </>
    );
}

export default Mobile_Nav;
