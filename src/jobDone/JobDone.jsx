import React from "react";
import randomQuoteMachine from "./images/random-quote-image.png"
import markdown from "./images/markdown.png"
import registrationForm from "./images/registration-form.png"
import landingPage from "./images/landing-page.png"
import todoList from "./images/todolist.png"
import quizPage from "./images/quiz-page.png"
import technicalDocumentation from "./images/technical-documentation.png"
import fordWebSite from "./images/fordWebsite.png"


export const JobDone = () => {

    return (
        <div>
            <section className="container">
                <h2 className="header">JOB DONE</h2>
                <div className="features">

                    <div className="card">
                        <h4>Random Quote Machine</h4>
                        <a href="https://filippialb.github.io/FCC-Random-Quote-Machine/" target="_blank">
                            <img src={randomQuoteMachine}></img>
                        </a>
                        <a href="https://filippialb.github.io/FCC-Random-Quote-Machine/">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Markdown previewer</h4>
                        <a href="https://filippialb.github.io/FCC-Markdown-Previewer/" target="_blank">
                            <img src={markdown}></img>
                        </a>
                        <a href="https://filippialb.github.io/FCC-Markdown-Previewer/">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Registration Form</h4>
                        <a href="src-pages/survey-form/index.html" target="_blank">
                            <img src={registrationForm}></img>
                        </a>
                        <a href="#">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Landing Page</h4>
                        <a href="src-pages/landing-page/index.html" target="_blank">
                            <img src={landingPage}></img>
                        </a>
                        <a href="#">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>To Do List</h4>
                        <a href="src-pages/toDoList/index.html" target="_blank">
                            <img src={todoList}></img>
                        </a>
                        <a href="#">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Quiz Page</h4>
                        <a href="src-pages/quiz-page/index.html" target="_blank">
                            <img src={quizPage}></img>
                        </a>
                        <a href="#">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Technical Documentation Page</h4>
                        <a href="src-pages/technical-documentation-page/index.html" target="_blank">
                            <img src={technicalDocumentation}></img>
                        </a>
                        <a href="#">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Ford Website Clone (WIP)</h4>
                        <a href="http://www.google.com" target="_blank">
                            <img src={fordWebSite}></img>
                        </a>
                        <a href="#">Take a look <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </section>
        </div>
    );
};
