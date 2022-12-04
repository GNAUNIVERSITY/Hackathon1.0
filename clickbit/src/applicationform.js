import React from "react";
import "./applicationform.css"
import { Footer } from "./footer";
import { Navbar } from "./navbar";
export const ApplicationForm =()=>{
    return(
        <div className="window">
            
            <Navbar/>
            <div className="applicationBox">
                <div className="Apply-Box">
                <div className="Name">
                    <div className="label">
                    <label>Customer Name </label>
                    </div>
                 
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                </div>
                <div className="Mobile">
                <div className="label">
                <label>Phone Number</label>
                </div>
                
                <input placeholder="+91900000000" type="phone"></input>
                </div>
                <div className="Address">
                <div className="label">
                <label>Address</label>
                </div>
               
                <input placeholder="Street Address Line"></input>      
                <input placeholder="Street Address Line 2"></input>
                <input placeholder="city" type="text"></input>               
                <input placeholder="Postal / Zip Code" type="number"></input>

                </div>
                <div className="Service">
                <div className="label">
                <label>Service </label>
                </div>
               
                <input placeholder="You Are Looking For" type="number"></input>

                </div>
                <div className="Description">
                <div className="label">
                <label>Description </label>
                </div>
               
                <input placeholder="Message to Facility Provider" type="number"></input>


                </div>
                <div>
                    <button>Submit</button>
                </div>

                </div>
                
                
                 
            </div>
            <Footer/>
        </div>
    )
}
