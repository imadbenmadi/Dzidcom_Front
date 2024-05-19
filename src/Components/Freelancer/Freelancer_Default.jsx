import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Freelancer_Default() {
    useEffect(() => {
        const { isProfileCompleted } = useAppContext();
        const Navigate = useNavigate();
        if (isProfileCompleted == false) {
            Navigate("/Freelancer/Complete_Profile");
        } else {
            Navigate("/Freelancer/Profile");
        }
    }, []);
}

export default Freelancer_Default;
