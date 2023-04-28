import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Components/AppBar/AppBar";



function Root(){
    return (
    <>
    <ResponsiveAppBar />
    <Outlet />
  
    
    </>
    
    )
    
}

export default Root