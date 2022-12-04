import React from "react";
import { Footer } from "./footer";
import { LoginBox } from "./loginbox";
import { Navbar } from "./navbar";
import "./login.css"
export const Login =()=>{
    return(
        <div className="window">
            <Navbar/>
            <LoginBox/>
            <Footer/>
        </div>
    )
}