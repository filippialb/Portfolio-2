import React from "react";
import './jobDone.css';
import randomQuoteMachine from "./images/random-quote-image.png"
import markdown from "./images/markdown.png"
import registrationForm from "./images/registration-form.png"
import todoList from "./images/todolist.png"
import quizPage from "./images/quiz-page.png"
import technicalDocumentation from "./images/technical-documentation.png"
import ecommerce from "./images/ecommerce.png"
import clock25 from "./images/25-5-clock.png"
import spaceTravel from "./images/space-travel.png"

export const JobDone = () => {

    return (
        <div>
            <section className="container">
                <h2 className="header">JOB DONE</h2>
                <div className="features">

                    <div className="card">
                        <h4>Spacial Travel Site</h4>
                        <a href="src-pages/space-travel/index.html" target="_blank">
                            <img src={spaceTravel}></img>
                        </a>
                        <a href="https://github.com/filippialb/Portfolio-2/tree/main/public/src-pages/quiz-page" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Random Quote Machine</h4>
                        <a href="https://filippialb.github.io/FCC-Random-Quote-Machine/" target="_blank">
                            <img src={randomQuoteMachine}></img>
                        </a>
                        <a href="https://github.com/filippialb/FCC-Random-Quote-Machine" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Markdown previewer</h4>
                        <a href="https://filippialb.github.io/FCC-Markdown-Previewer/" target="_blank">
                            <img src={markdown}></img>
                        </a>
                        <a href="https://github.com/filippialb/FCC-Markdown-Previewer" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Registration Form</h4>
                        <a href="src-pages/survey-form/index.html" target="_blank">
                            <img src={registrationForm}></img>
                        </a>
                        <a href="https://github.com/filippialb/Portfolio-2/tree/main/public/src-pages/survey-form" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Ecommerce</h4>
                        <a href="https://filippialb.github.io/ecommerce/" target="_blank">
                            <img src={ecommerce}></img>
                        </a>
                        <a href="https://github.com/filippialb/ecommerce" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>To Do List</h4>
                        <a href="src-pages/toDoList/index.html" target="_blank">
                            <img src={todoList}></img>
                        </a>
                        <a href="https://github.com/filippialb/Portfolio-2/tree/main/public/src-pages/toDoList" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>Quiz Page</h4>
                        <a href="src-pages/quiz-page/index.html" target="_blank">
                            <img src={quizPage}></img>
                        </a>
                        <a href="https://github.com/filippialb/Portfolio-2/tree/main/public/src-pages/quiz-page" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>

                    <div className="card">
                        <h4>25+5 clock</h4>
                        <a href="https://filippialb.github.io/FCC-25-5-clock/" target="_blank">
                            <img src={clock25}></img>
                        </a>
                        <a href="https://github.com/filippialb/FCC-25-5-clock" target="_blank">Code <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </section>
        </div>
    );
};
