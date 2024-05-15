import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";

import Freelancer from "./Components/Freelancer/Freelancer";
import Freelancer_Profile from "./Components/Freelancer/Freelancer_Profile";
import Freelancer_Edite_Profile from "./Components/Freelancer/Freelancer_Edite_Profile";
import Freelancer_Jobs from "./Components/Freelancer/Freelancer_jobs";
import Freelancer_Messages from "./Components/Freelancer/Freelancer_Messages";

import Not_Found from "./Components/Not_Found";
import Not_Finished from "./Components/Not_Finished";

const routes = createBrowserRouter([
    {
        path: "/Freelancer/:id",
        element: <Freelancer />,
        children: [
            {
                path: "/Freelancer/:id/Profile",
                element: <Freelancer_Profile />,
            },
            {
                path: "/Freelancer/:id/Profile/Edite",
                element: <Freelancer_Edite_Profile />,
            },
            {
                path: "/Freelancer/:id/jobs",
                element: <Freelancer_Jobs />,
            },
            // {
            //     path: "/Freelancer/:id/Process",
            //     element: < />,
            // },
            {
                path: "/Freelancer/:id/Messages",
                element: <Freelancer_Messages />,
            },
            {
                path: "/Freelancer/:id/applications",
                element: <Freelancer_Messages />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/Home", element: <Home /> },
            {
                path: "/Login",
                element: <Login />,
            },
            {
                path: "/Register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/Profile",
        element: <Not_Finished />,
    },

    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
