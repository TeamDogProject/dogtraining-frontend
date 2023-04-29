import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from "../Layouts/root";
import Login from "../Components/Login/Login";
import About from "../Page/About/About";
import SignUpPage from "../Page/Signup/SignUpPage";
import Contact from "../Page/Contact/Contact";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root />,

        children:[
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/signup',
                element:<SignUpPage />
            }, 
            {
                path:'/contact',
                element:<Contact />
            },
        ]
        
    }

])

export default router