import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Register from "../pages/Register";
import Card from "../components/Card";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: 'events',
                element: <Card />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },

        ]
    },

])

export default router;