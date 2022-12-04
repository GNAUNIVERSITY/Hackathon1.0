import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom"
export const Navbar = ()=>{
    return(
        <div>
            <div className="navbar-container">
            <nav className="navbar">
                <div className="left-nav">
                    <div className="logo">
                    <Link to ="/" ><h2>clickbit</h2></Link>
                    </div>
                </div>
                <div className="center-nav">
                    <div className="search-bar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="What are you looking for today?" />
                    </div>
                   
                </div>
                <div className="right-nav">
                    <ul>
                     <li>  <Link to ="/" >Home</Link></li>  
                        <li><Link to ="/Service" >Services</Link></li>
                        <li id="he"><Link to ="/application" >Register as Professional </Link></li>
                        <li><Link to ="/signup" >Sign Up / Login</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
           
        </div>
    )
}