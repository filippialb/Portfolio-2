import React from "react";
import { useEffect } from 'react';
import logoFA from "./images/logoFA.png"
//import hireMe from "../hireMe/index.html"
import navOpen from "./navigation.js"


const scrollToElement = (elementSelector, instance = 0) => {
    //Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //Check if there are elements matching the selector and if the requestedinstance exist
    if (elements.length > instance){
        //scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}











export const NavLogo = () => {

    useEffect(() => {

        const linkJobDone = document.getElementById("linkJobDone");
        const linkSkils = document.getElementById("linkSkils");
        const linkAbout = document.getElementById("linkAbout");
        const linkGetInTouch = document.getElementById("linkGetInTouch");
        const linkGetInTouch2 = document.getElementById("linkGetInTouch2");

                
        linkJobDone.addEventListener('click', () => {
            scrollToElement('.header');
        });

        linkSkils.addEventListener('click', () => {
            //scrool to the second element with "header" class 
            scrollToElement('.header', 1);
        });

        linkAbout.addEventListener('click', () => {
            scrollToElement('.column');
        });

        linkGetInTouch.addEventListener('click', () => {
        scrollToElement('.header', 2);
        });

        linkGetInTouch2.addEventListener('click', () => {
        scrollToElement('.header', 2);
        });


    }, []);












    return (
        <div>
            <nav>
                <div className="nav-logo">
                    <a href="https://github.com/filippialb" target="_blank">
                        <img src={logoFA}></img>
                    </a>
                </div>
                <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
                <ul className="nav-links primary-navigation">   
                    <li className="link active"><a href="#">Home</a></li>  
                    <li id="linkJobDone" className="link"><a href="#">Job Done</a></li>
                    <li id="linkSkils" className="link"><a href="#">Skills</a></li>
                    <li id="linkGetInTouch" className="link"><a href="#">Get In Touch</a></li>
                    <li id="linkAbout"className="link"><a href="#">About</a></li>
                </ul>
            
                {/*
                <a href="https://filippialb.github.io/HireMe/" target="_blank"><button className="btn">Hire Me</button></a>
                */}
            
            </nav>
        </div>
    );
};
