import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Quiz from "./Quiz";
import Basics from "./Basics";
import Home from "./Home";
import Footer from "./Footer";
import Result from "./Result";
function App() {
  // ToDo:
  // export things using gh-pages and webpack
  // turn result.html into a component
  return (
    <div className="home">
      <Router>
        <div>
          <Navbar />
          <Route exact component={Home} path="/" />
          <Route exact component={Basics} path="/basics" />
          <Route exact component={Quiz} path="/quiz" />
          <Route exact component={Result} path="/result" />
        </div>
      </Router>
      <Footer />

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
      <script type="text/javascript" />
    </div>
  );
}

export default App;
