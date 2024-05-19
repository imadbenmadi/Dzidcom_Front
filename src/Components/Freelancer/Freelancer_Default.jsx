import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router";
function Freelancer_Default() {
    const { isProfileCompleted } = useAppContext();
    const Navigate = useNavigate();
    if (isProfileCompleted == false) {
        Navigate("/Freelancer/Complete_Profile");
    } else {
        Navigate("/Freelancer/Profile");
    }
}

export default Freelancer_Default;
