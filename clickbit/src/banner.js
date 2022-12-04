import React from "react";
import "./banner.css"
import {Link} from "react-router-dom"
export const Banner = ()=>{
    return(
        <div>
            <div className="banner">
                <div className="banner-container">
                    <h1>Are You Looking For </h1>
                    <div className="looking">
                       <h1>Plumber <span>?</span></h1>
                       <h1>Electrician <span>?</span></h1>
                       <h1>Barber <span>?</span></h1>
                       <h1>Babysitter <span>?</span></h1>
                    </div>
                    <div>
                        <p>
                            The Easiest Way For Finding What You Looking For ...
                        </p>
                    </div>
                    <div>
                    <Link to ="/Service" ><button>Find Now </button></Link>
                    </div>
    
                </div>
            </div>
        </div>
    )
}