import React from "react";
import headerImage from "./header.png"



export const Header = () => {

    return (
        <div>
            <header className="container">
                <div className="content">
                    <span className="blur"></span> 
                    <span className="blur"></span>
                        <h4>CREATE YOUR SITE LIKE A PRO</h4>  
                        <h1>Hi, I'm <span>Filippi</span>, Web Developer</h1> 
                        <p id="description">
                            Passionate Frontend Developer | Carfting Exceptional User Experiences | 
                            Work with Javascript & React | Transforming Visions into Interactive Digital Solutions |
                            Let's Elevate Your Website to the Next Level!
                        </p>
                        <button className="btn" id="linkGetInTouch2">Get Stated</button>
                </div>
                    
                <div className="image">
                    <img src={headerImage} />
                </div>
            </header>
        </div>
    );
};
