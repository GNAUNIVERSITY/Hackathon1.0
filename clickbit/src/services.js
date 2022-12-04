import React from "react";
import "./services.css";
import {Link} from "react-router-dom"
export const Services =()=>{
    return(
        <div>
            <div className="service-container">
                <div className="services">
                    <div className="container-name">
                        <div className="container_title">
                            <div>
                                <h2>Service</h2>
                            </div>
                            <div>
                            <Link to ="/service" ><h5>More.</h5></Link>
                            </div>
                        </div>
                        <div className="container-box">
                            <div className="box">
                                <div className="thumbnail">
                                    <img src="https://www.plumbingbyjake.com/wp-content/uploads/2015/11/VIGILANT-plumber-fixing-a-sink-shutterstock_132523334-e1448389230378.jpg" />
                                </div>
                                <div className="service-name">
                                    <h3>Plumber</h3>
                                </div>
                            </div>
                            <div className="box">
                                <div className="thumbnail">
                                    <img src="https://www.shutterstock.com/image-photo/professional-caucasian-gardener-his-30s-260nw-1171923343.jpg" />
                                </div>
                                <div className="service-name">
                                    <h3>Gardener</h3>
                                </div>
                            </div>
                            <div className="box">
                                <div className="thumbnail">
                                    <img src="https://cdn.shopify.com/s/files/1/0001/9211/8835/files/How_to_talk_to_your_barber_480x480.png?v=1621594265" />
                                </div>
                                <div className="service-name">
                                    <h3>Barber</h3>
                                </div>
                            </div>
                           
                            <div className="box">
                                <div className="thumbnail">
                                    <img src="https://images.news18.com/ibnkhabar/uploads/2022/07/nurse-.jpg" />
                                </div>
                                <div className="service-name">
                                    <h3>Nurse</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}