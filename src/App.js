import React, { Component } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import AboutMe from "./pages/index.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer";
import "./pages/style/style.css";

class App extends Component {

  render(){  
  return (
    <Router>
      <Navbar>
      </Navbar>
      <Route exact path="/">
      <AboutMe />
      </Route>
      <Route exact path="/portfolio">
      <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Footer />
    </Router>
  );
}

}
export default App;
