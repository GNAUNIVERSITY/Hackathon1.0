import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {

    return (
        <>

          <h2 className="top"> welcome to the social welfare </h2>
          <h5 className="down">Social welfare is a broad and imprecise term that  <br />
          refers to different things depending on context. Strictly speaking, when used <br />
           with the definite article, the term 
          refers to the overall well-being of the entire society, <br /> which could be based on such factors as standard of living</h5>
          <button type="button" className="btn btn-success">Donation</button>
          <Footer />
        </>
    );
};
export default Home;
