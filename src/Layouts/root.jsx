
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Components/AppBar/AppBar";
import Footer from "../Components/Footer/Footer";

function Root(){
    return (
    <>
    <ResponsiveAppBar />
    <Outlet />
    <Footer/>
    </>
    
    )
    
}

export default Root