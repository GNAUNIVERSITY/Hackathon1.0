import React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Services } from "./services";
export const ServicePage =()=>{
    return(
        <div className="window">
            <Navbar/>
            <Services/>
            <Footer/>
        </div>
    )
}
