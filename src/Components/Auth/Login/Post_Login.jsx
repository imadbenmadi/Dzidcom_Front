import Swal from "sweetalert2";
import Axios from "axios";
async function handleLogin(values, { setSubmitting }) {
    try {
        let response = await Axios.post("http://localhost:3000/Login", values, {
            withCredentials: true,
            validateStatus: () => true,
        });

        if (response.status == 200) {
            window.location.href = "/Profile";
        } else if (response.status == 401) {
            Swal.fire(
                "Error!",
                "Username or Password isn't correct",
                "error"
            );
        } else if (response.status == 409) {
            Swal.fire("Error!", `${response.data.message} `, "error");
        } else if (response.status == 500) {
            Swal.fire("Error!", `Internal Server Error   `, "error");
        } else if (response.status == 429) {
            Swal.fire(
                "Error!",
                `Too many requests ,try again latter\n  `,
                "error"
            );
        } else {
            Swal.fire("Error!", `Something Went Wrong ,`, "error");
        }
    } catch (error) {
        Swal.fire("Error!", `Something Went Wrong `, "error");
    }
    setSubmitting(false);
}
export default handleLogin;
