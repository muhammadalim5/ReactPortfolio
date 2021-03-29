import React, { Component } from "react";
import Project from "../components/project/index";
import Project1screenshot from "./assets/project1.jpeg";
import LibraryScreenshot from "./assets/password.png";
import Quizscreenshot from "./assets/quizz.PNG";
import Schedulescreenshot from "./assets/schedule.PNG";
import Budgetscreenshot from "./assets/budget.png";
import Burgerscreenshot from "./assets/burger.png";

class Portfolio extends Component {

    state = {
        project1: ["Project 1", Project1screenshot, "https://saidmg.github.io/project1/", "https://github.com/saidmg/project1.git"],
        library: ["Library Management System", LibraryScreenshot, "https://library-management-system-lms.herokuapp.com/index.html", "https://github.com/muhammadalim5/library-management-system.git"],
        quiz: ["Quiz Generator", Quizscreenshot, "https://muhammadalim5.github.io/Quiz-Generator-app/", "https://github.com/muhammadalim5/Quiz-Generator-app.git"],
        schedule: ["Week-Day-Schedule", Schedulescreenshot, "https://github.com/muhammadalim5/Week-Day-Schedule-app", "https://github.com/muhammadalim5/Week-Day-Schedule-app.git"],
        budget: ["Budget Tracker", Budgetscreenshot, "https://budgettracker-5.herokuapp.com/", "https://github.com/muhammadalim5/budget-tracker.git"],
        burger: ["Burger", Burgerscreenshot, "https://burger-apps-ba.herokuapp.com/", "https://github.com/muhammadalim5/burger-application.git"]
    }

    render() {
        return (
            <div className="container" style={{marginTop:'5%'}}>
                <div className="row">
                <Project props={this.state.project1} />
                <Project  props={this.state.library} />
                <Project  props={this.state.quiz} />
                <Project  props={this.state.schedule} />
                <Project props={this.state.budget} />
                <Project props={this.state.burger} />
                </div>
            </div>
        )
    }
}

export default Portfolio;