import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function Client_Default() {
    useEffect(() => {
        const { isProfileCompleted } = useAppContext();
        const Navigate = useNavigate();
        if (isProfileCompleted == false) {
            Navigate("/Client/Complete_Profile");
        } else {
            Navigate("/Client/Profile");
        }
    }, []);
}

export default Client_Default;
