import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <nav id="navbar">
                <ul>
                    <li>
                        <NavLink
                            exact
                            className="nav-link active" aria-current="page"
                            to="/">Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            exact
                            className="nav-link active" aria-current="page"
                            to="/Individual">Individual Efforts
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                            exact
                            className="nav-link active" aria-current="page"
                            to="/about">About Us
                        </NavLink>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Goverment Scheme
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="https://www.investindia.gov.in/atmanirbhar-bharat-abhiyaan">Atmanirbhar Bharat Abhiyan</a></li>
                            <li><a class="dropdown-item" href="https://samarth-textiles.gov.in/">Samarth Scheme</a></li>
                            <li><a class="dropdown-item" href="https://www.education.gov.in/en/sarva-shiksha-abhiyan-0">Savya Shiksha Abhiyaan</a></li>
                            <li><a class="dropdown-item" href="https://www.jagranjosh.com/general-knowledge/pradhan-mantri-svanidhi-scheme-1591863433-1">Pradhan Mantri SVANidhi Scheme</a></li>
                            <li><a class="dropdown-item" href="https://www.india.gov.in/production-linked-incentive-pli-scheme#:~:text=Production%20Linked%20Incentive%20or%20PLI%20scheme%20is%20a,incremental%20sales%20from%20products%20manufactured%20in%20domestic%20units.">Production Linked Incentive (PLI) Scheme</a></li>
                        </ul>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Private Orggnisation
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="https://www.adanifoundation.org/">Adani Foundation</a></li>
                            <li><a class="dropdown-item" href="https://www.colgate.com/en-in/smile-karo-aur-shuru-ho-jao/foundation-scholarship">Keep India Smiling Foundation <br />
                            Scholarship - Colgate</a></li>
                            <li><a class="dropdown-item" href="https://www.reliancefoundation.org/">Reliance Foundation</a></li>
                        </ul>
                    </li>


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        RTI
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="https://rti.gov.in/">Right to information Act 2005</a></li>
                            <li><a class="dropdown-item" href="https://www.pmindia.gov.in/en/proactive-disclosure-under-section-4-1-b-of-the-rti-act-2005/">Proactive Disclosure under <br />
                            Section 4(1) (b) of RTI Act, 2005</a></li>
                        </ul>
                    </li>



                </ul>
            </nav>

        </>
    );
};
export default Navbar;
