import React from "react";

const Footer = () => {
    return (
        <>
           <div className="row justify-content-evenly bg-dark text-white pt-3 pb-5">
            <div className=" col-md-3 pt-4">
                <h5 className="pb-3">Department of Social Welfare</h5>
                <p>This is the official Website of Department of Social Welfare, India.
Contents on this website are published and managed by Department of Social Welfare of India.
For any query regarding this website, please contact the "Web Information Manager."</p>
                <i class="bi bi-instagram social-icon"></i>
          <i class="bi bi-facebook social-icon"></i>
          <i class="bi bi-twitter social-icon"></i>
          <i class="bi bi-whatsapp social-icon"></i>
                
            </div>
            <div className=" col-md-3 pt-4">
                <h5 className="pb-3">Important Links</h5>
               <p>
               
                   <a href="http://samajkalyan.up.gov.in/en/page/terms-conditions" className="link-light text-decoration-none">Terms & Condition</a><br />
                   <a href="http://samajkalyan.up.gov.in/en/page/privacy-policy" className="link-light text-decoration-none">Privacy Policy</a><br />
                   <a href="http://samajkalyan.up.gov.in/en/page/copyright-policy" className="link-light text-decoration-none">Copyright Policy</a><br />
                   <a href="http://samajkalyan.up.gov.in/en/page/hyperlinking-policy" className="link-light text-decoration-none">Hyperlink Policy</a><br />
                   <a href="http://samajkalyan.up.gov.in/en/page/disclaimer" className="link-light text-decoration-none">Our Client</a><br />
               </p>
            </div>
            <div className=" col-md-3 pt-4">
               <h5 className="pb-3">Contact Us</h5>
               <p>District Magistrate Office <br /> Prag Narayan Rd, Butler Colony
Lucknow - 226 001<br />211003 <br />
                   Email : dmall [at]nic [dot]in. <br />
                   <i className="bi bi-telephone"></i>
                   Phone : +91-532-2440515, 2250300</p>
            </div>
    

       </div>

        <div className="row bg-secondary text-white text-center p-2">
            <div className="col-12">
                <p>Copyright 1999-2022 by Prakhar & Rohit. All Rights Reserved.</p>
            </div>
        </div>
        
    

        </>
    );
};

export default Footer;