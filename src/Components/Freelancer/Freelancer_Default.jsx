import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Freelancer_Default() {
    const Navigate = useNavigate();
    const { isProfileCompleted } = useAppContext();
    useEffect(() => {
        if (isProfileCompleted == false) {
            Navigate("/Freelancer/Complete_Profile");
        } else {
            Navigate("/Freelancer/Profile");
        }
    }, []);
}

export default Freelancer_Default;
