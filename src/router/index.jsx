import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from "../Layouts/root";
import Login from "../Components/Login/Login";
import {CarouselRatio} from "../Page/Home/Carroussel/Carroussel";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root />,

        children:[
            {
                path:'/',
                element:<CarouselRatio />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            }
        ]
        
    }

])

export default router