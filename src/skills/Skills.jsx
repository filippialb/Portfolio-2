import React from "react";
import htmlLogo from "./images/html-css-logo.png";
import jsLogo from "./images/javascript-logo.png"
import reactLogo from "./images/react-logo.png"

export const Skills = () => {

    return (
        <div>
        <div>
            <section className="container">
                <h2 className="header">SKILLS</h2>
                <p className="sub-header">
                    See below which main technologies I can work with:  
                </p>

                <div className="pricing">
                    <div className="card">
                        <div className="content">
                            <h3>HTML/CSS</h3>
                            
                            <p>
                            <img className="html-logo" src={htmlLogo}></img>
                            </p>

                            <p className="hability-question">
                                <i className="ri-checkbox-circle-line"></i>
                                Do you have a project that uses this technology?
                            </p>
                        </div>
                        <a href="https://filippialb.github.io/HireMe/" target="_blank"><button className="btn">Send a message</button></a>
                    </div>

                    <div className="card">
                        <div className="content">
                            <h3>Javascript</h3>
                            <p>
                                <img src={jsLogo}></img>
                            </p>

                            <p>
                                <i className="ri-checkbox-circle-line"></i>
                                Do you have a project that uses this technology?
                            </p>
                        </div>
                        <a href="https://filippialb.github.io/HireMe/" target="_blank"><button className="btn">Send a message</button></a>
                    </div>

                    <div className="card">
                        <div className="content">
                            <h3>React</h3>
                            <p>
                                <img src={reactLogo}></img>
                            </p>

                            <p>
                                <i className="ri-checkbox-circle-line"></i>
                                Do you have a project that uses this technology?
                            </p>
                        </div>
                        <a href="https://filippialb.github.io/HireMe/" target="_blank"><button className="btn">Send a message</button></a>
                    </div>
                </div>
                
            </section>
        </div>
        </div>
    );
};

