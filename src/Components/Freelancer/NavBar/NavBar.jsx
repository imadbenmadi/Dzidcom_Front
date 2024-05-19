import Laptop_Nav_Items from "./Laptop_Nav_Items";
import Mobile_Nav from "./Mobile_Nav";
function NavBar({ isProfileCompleted }) {
    return (
        <div
            className={` fixed  h-[50px] md:h-[60px] m-0  z-40 w-full bg-white  `}
        >
            <Laptop_Nav_Items isProfileCompleted={isProfileCompleted} />
            <Mobile_Nav isProfileCompleted={isProfileCompleted} />
        </div>
    );
}

export default NavBar;
