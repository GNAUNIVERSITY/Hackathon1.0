import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App";
import { ApplicationForm } from "./applicationform";
import { Login } from "./login";
import { ServicePage } from "./servicepage";
export const Main =()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route  path="/" element={<App />} />
                    <Route exact path="/service" element={<ServicePage />} />
                    <Route exact path="/signup" element={<Login />} />
                    <Route exact path="/application" element={<ApplicationForm />} />

                </Routes>
            </Router>

        </div>
    )
}