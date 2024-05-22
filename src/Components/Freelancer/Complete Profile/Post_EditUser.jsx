import Swal from "sweetalert2";
import Axios from "axios";
async function handleEdite(values, user, set_user, Link, { setSubmitting }) {
    try {
        console.log("values to send in Edite: ", values);

        let response = await Axios.put(
            `http://localhost:3000/Freelancers/${values.userId}/Profile`,
            values,
            {
                withCredentials: true,
                // validateStatus: () => true,
            }
        );
        console.log("response from Edite: ", response);
        if (response.status == 200) {
            set_user(response.data.user);
            if (Link) window.location.href = Link;
        } else if (response.status == 400) {
            setSubmitting(false);
            Swal.fire("Error", `${response.data.message} `, "error");
        } else if (response.status == 409) {
            setSubmitting(false);
            Swal.fire("Error!", `${response.data.message} `, "error");
        } else if (response.status == 500) {
            setSubmitting(false);
            Swal.fire("Error!", `Internal Server Error   `, "error");
        } else if (response.status == 429) {
            setSubmitting(false);
            Swal.fire(
                "Error!",
                `Too many requests ,try again latter\n  `,
                "error"
            );
        } else {
            setSubmitting(false);
            Swal.fire(
                "Error!",
                `Something Went Wrong ,please trye again latter, ${response.data.message} `,
                "error"
            );
        }
    } catch (error) {
        console.log("response from register: ", error);
        setSubmitting(false);
        Swal.fire(
            "Error!",
            `Something Went Wrong ,please trye again latter`,
            "error"
        );
    }

    // setSubmitting(false);
}
export default handleEdite;
