import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const About = () => {

   return (

    <>
        
        <div className="social">
      <h2 className="intro"> Welcome To Social Welfare</h2>
      <h4> INTRODUCTION</h4>
      <p>Social welfare systems provide assistance to individuals and families through programs such as health care,
         food stamps, unemployment compensation, housing assistance, and child care assistance. In the U.S., a
         caseworker is assigned to each individual or family applying for benefits to determine and confirm the
         applicant's needs.

         The benefits available to an individual vary by state. Eligibility is determined based on factors surrounding
         the person’s financial status and how it relates to the minimum acceptable levels within a particular state.
         The factors involved can include the size of the family unit, current income levels, or an assessed disability.

         Within each state, social welfare systems may go by different names, but they often serve similar functions.
         This can cause confusion when attempting to compare one state's program to another. Additionally, the
         requirements to qualify also vary, depending on the poverty line in a particular state. This allows for
         adjustments based on items such as cost of living that are not standardized across the country.</p>
      <h5>
         Key Issues
      </h5>
      <ul>
         <li>Social protection systems</li>
         <li>Social protection systems and social protection floors</li>
         <li>Disability benefits</li>
         <li>Employment injury protection</li>
      </ul>
      <marquee behavior="" direction="">
         <ul>
            <li>Successful people always see things working out &nbsp;</li>
         </ul>
      </marquee>

   </div>
   <hr />
   
{/* image */}


{/* image */}



   <div className="ngo">
      <h5>NGO IN INDIA</h5>
      <p>India has over three million Non-Governmental Organisations (NGO) that work across a range of arenas and play
         important roles of facilitator, catalyst or partner in bringing social transformation</p>
      <p>TOP 10 NGO IN INDIA</p>
      <ol>
         <li>Pratham</li>
         <li>Smile Foundation</li>
         <li>Nanhi Kali</li>
         <li>Goonj</li>
         <li>Give India Foundation</li>
         <li>HelpAge India </li>
         <li>CRY (Child Rights and You)</li>
         <li> Childline India Foundation </li>
         <li>Care India</li>
         <li>Sammaan Foundation </li>
      </ol>
   </div>
   <div className="berojgari">
      <h4>How To Get Berojgari Bhatta.</h4>
      <p>All the applicants applying under this scheme should be between 21 to 35 years of age. The annual family income
         of the applicant should not exceed 3 lakhs. To take advantage of Bihar Berojgari Bhatta 2021, the educated
         qualification of unemployed youth should be 12 passes</p>
   </div>
   
   <br />
   <Footer />

</>
      
   );
   };

export default About;
