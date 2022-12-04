import React from "react";
import {Link} from "react-router-dom"
import "./review.css"
import { Reviewbox } from "./reviewbox";
export const Review =()=>{
    return(
        <div>
        <div className="reviewsss" >
            <div>
                
            </div>
            <Reviewbox/>
            <Reviewbox/>
            <Reviewbox/>
            <Reviewbox/>
        </div>
         </div>
    )
}