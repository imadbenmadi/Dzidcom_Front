import Swal from "sweetalert2";
import Axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";
async function handleLogin(values, { setSubmitting }) {
    // const Navigate = useNavigate();
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
            Swal("Done!", "Account Created Successfully", "success");

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
                    // Navigate("/Profile");
                    Swal("Done!", "Account Login Successfully", "success");
                    // window.location.href = "/Profile";
                } else {
                  // window.location.href = "/Login";
                    Swal.fire(
                        "Error!",
                        "Username or Password isn't correct",
                        "error"
                    );
                    // Navigate("/Login");
                }
            } catch (error) {
                console.log("error ducring regestration : ", error);
                Swal("Error!", "Something Went Wrong", "error");
                // window.location.href = "/Login";
            }
            Swal.fire("Done!", "Account Created Successfully", "success");
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
export default handleLogin;
