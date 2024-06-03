import axios from "axios";
import Swal from "sweetalert2";

const FetchProjcets = async ({ setProjcets, setLoading, setError }) => {
    setLoading(true);
    try {
        const response = await axios.get(
            `http://localhost:3000/Clients/${user.id}/Projects`,
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );
        console.log("response from get prjects", response);
        if (response.status == 200) {
            const Projcets = response.data.Projects;
            setProjcets(Projcets);
        } else if (response.status == 401) {
            Swal.fire("Error", "you should login again", "error");
            Naviagte("/Login");
        } else {
            setError(response.data);
        }
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};
export default FetchProjcets;
