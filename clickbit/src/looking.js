import React from "react";
import "./looking.css"
import {Link} from "react-router-dom"
export const Looking =()=>{
    return(
        <div>
            <div className="Looking-container">
                <div><h1>You Are Looking For ... </h1></div>
                        <div className="service-name-box">
                        <Link to ="/service" ><div className="service-name sn1"> <h2>Enginer</h2></div></Link>
                        <Link to ="/" ><div className="service-name sn2"> <h2>Barber</h2></div></Link>
                        
                             </div>
                <div  className="service-name-box">
                   <Link to ="/" ><div className="service-name sn3"> <h2>Plumber</h2></div></Link> 
                    <Link to ="/" ><div className="service-name sn4"> <h2>Gardner</h2></div></Link>
                    <Link to ="/" ><div className="service-name sn5"> <h2>Nurse</h2></div></Link>
                </div>
                <div> <Link to ="/service" ><button>More ..</button></Link></div>
            </div>
        </div>
    )
}