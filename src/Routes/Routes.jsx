import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllData from "../Pages/AllData/AllData";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'alldata',
                element: <AllData></AllData>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);


export default router;