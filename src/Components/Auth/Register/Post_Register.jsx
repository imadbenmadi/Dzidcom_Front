import Swal from "sweetalert2";
import Axios from "axios";
async function handleRegister(values, { setSubmitting }) {
    try {
        let response = await Axios.post(
            "http://localhost:3000/Register",
            values,
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 200) {
            try {
                let Login_response = await Axios.post(
                    "http://localhost:3000/Login",
                    values,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                if (Login_response.status == 200) {
                    if (Login_response.data.userType == "client") {
                        window.location.href = `/Client`;
                    } else if (Login_response.data.userType == "freelancer") {
                        window.location.href = `/Freelancer`;
                    } else {
                        window.location.href = "/Login";
                    }
                } else {
                    window.location.href = "/Login";
                }
            } catch (error) {
                console.log("error during regestration : ", error);
                window.location.href = "/Login";
            }
        } else if (response.status == 400) {
            Swal.fire("Error", `${response.data.message} `, "error");
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
            Swal.fire(
                "Error!",
                `Something Went Wrong ,please trye again latter, ${response.data.message} `,
                "error"
            );
        }
    } catch (error) {
        Swal.fire(
            "Error!",
            `Something Went Wrong ,please trye again latter`,
            "error"
        );
    }

    setSubmitting(false);
}
export default handleRegister;
