import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllData from "../Pages/AllData/AllData";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AddItem from "../Pages/AddItem/AddItem";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import UpdatedToy from "../Pages/UpdatedToy/UpdatedToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
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
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items/${params.id}`)

            },
            {
                path: 'addtoy',
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>,
                // loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items/${params.id}`)

            },
            {
                path: 'updated/:id',
                element: <PrivateRoute><UpdatedToy></UpdatedToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items/${params.id}`)
            }
        ]
    },
]);


export default router;