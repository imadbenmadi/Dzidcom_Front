import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function Client_Default() {
    const { isProfileCompleted } = useAppContext();
    const Navigate = useNavigate();
    useEffect(() => {
        if (isProfileCompleted == false) {
            Navigate("/Client/Complete_Profile");
        } else {
            Navigate("/Client/Profile");
        }
    }, []);
}

export default Client_Default;
