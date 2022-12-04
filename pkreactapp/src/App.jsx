
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
// import Contact from "./Contact";
import Footer from "./Footer";
import Individual from "./Individual";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";


const App = () => {

   return (
      <>
      
      <ImageSlider slides={SliderData} />
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/individual" element={<Individual />} />
            <Route path = "/" element={<Navigate to="/" />} />
         </Routes>
         

      </>
   );
};
export default App;

 

