import React from "react";
import "./footer.css"
export const Footer =()=>{
    return(
        <div>
            <div className="footer">
                <div className="footer-container" >
                    <div className="logo-footer">
                        <h1>clickbit</h1>
                        <p>everything on on your click</p>
                    </div>
                <div className="left-footer">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="center-footer">
                <h2>Help Center</h2>
                    <ul>
                        <li><a href="">Complaint</a></li>
                        <li><a href="">Query</a></li>
                        <li><a href="">Suggestion</a></li>
                        
                    </ul>
                </div>
                <div>
                <h2>Company</h2>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
                <div className="right-footer">
                    <ul>
                    <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-snapchat"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook  "></i></a></li>
                    </ul>
                </div>

                </div>
                
               

            </div>
        </div>
    )
}