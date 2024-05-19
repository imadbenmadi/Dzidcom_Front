import Laptop_Nav_Items from "./Laptop_Nav_Items";
import Mobile_Nav from "./Mobile_Nav";
import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
function NavBar({ isProfileCompleted }) {
    const [Active_nav, setActive_nav] = useState("Home");
    const location = useLocation();
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[2]);
    }, [location.pathname]);
    return (
        <div
            className={` fixed  h-[50px] md:h-[60px] m-0  z-40 w-full bg-white  `}
        >
            <Laptop_Nav_Items
                isProfileCompleted={isProfileCompleted}
                Active_nav={Active_nav}
            />
            <Mobile_Nav
                isProfileCompleted={isProfileCompleted}
                Active_nav={Active_nav}
            />
        </div>
    );
}

export default NavBar;
