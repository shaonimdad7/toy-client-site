import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllData from "../Pages/AllData/AllData";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AddItem from "../Pages/AddItem/AddItem";
import Blog from "../Pages/Blog/Blog";

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
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'viewdetails/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)

            },
            {
                path: 'addtoy',
                element: <AddItem></AddItem>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
]);


export default router;