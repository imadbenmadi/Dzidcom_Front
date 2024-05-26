import Swal from "sweetalert2";
import Axios from "axios";
async function Delete_Profile_Pic(
    setimageDeleteLoading,
    set_user,
    setimage_state
) {
    setimageDeleteLoading(true);
    try {
        let Image_Response = await Axios.delete(
            `http://localhost:3000/upload/Freelancer/ProfilePic`,
            // {},
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );
        console.log("Image_Response from upload image: ", Image_Response);
        if (Image_Response.status == 200) {
            Swal.fire(
                "Success",
                `Profile Picture Deleted Successfully`,
                "success"
            );
            set_user((prevUser) => ({
                ...prevUser,
                profile_pic_link: null,
            }));
            setimage_state(null);
        } else if (Image_Response.status == 400) {
            Swal.fire("Error", `${Image_Response.data.message} `, "error");
        } else if (Image_Response.status == 409) {
            Swal.fire("Error!", `${Image_Response.data.message} `, "error");
        } else if (Image_Response.status == 500) {
            Swal.fire("Error!", `Internal Server Error   `, "error");
        } else if (Image_Response.status == 429) {
            Swal.fire(
                "Error!",
                `Too many requests ,try again latter\n  `,
                "error"
            );
        } else {
            Swal.fire(
                "Error!",
                `Something Went Wrong ,please trye again latter, ${Image_Response.data.message} `,
                "error"
            );
        }
    } catch (error) {
        console.log("response from delete image: ", error);
        Swal.fire(
            "Error!",
            `Something Went Wrong ,please trye again latter`,
            "error"
        );
    } finally {
        setimageDeleteLoading(false);
    }
}
export default Delete_Profile_Pic;
