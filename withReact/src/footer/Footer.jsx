import React from "react";



export const Footer = () => {

    return (
        <div>
            <footer className="container">
                <span className="blur"></span>
                <span className="blur"></span>  
                <div className="column">
                    <p>                        
                        "Any fool can write code that a computer can understand. 
                        Good programmers write code that humans can understand."
                        - Martin Fowler
                    </p>
                    <div className="socials">
                        <a href="https://www.youtube.com/"><i className="ri-youtube-line"></i></a>
                        <a href="https://www.instagram.com/"><i className="ri-instagram-line"></i></a>
                        <a href="https://twitter.com/"><i className="ri-twitter-line"></i></a>
                    </div>
                </div>

                <div className="column">
                    <h4> </h4>
                    <a href="#" target="_blank"> </a>
                    <a href="#" target="_blank"> </a>
                    <a href="#"> </a>
                </div>

                <div className="column">
                    <h4> </h4>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                </div>

                <div className="column">
                    <h4>About me</h4>
                    <a href="https://github.com/filippialb" target="_blank">GitHub</a>
                    <a href="https://github.com/filippialb/Portfolio-2" target="_blank">This portfolio code</a>
                    <a href="/CV/cv.pdf" download="Filippi_Resume.pdf">My resume</a>
                </div>
            </footer>

        </div>

    );
};
