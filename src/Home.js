import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
  return (
    <div class="body-container">
      <div class="section">
        <div class="page-center-small text-center">
          <div class="row">
            <div class="col-sm-6">
              <Link className="card" to="/basics">
                <div class="card-body">
                  <i class="fa fa-shapes" />
                  <h2 class="card-title">Basics</h2>
                  <p class="card-text">Learn some of the fundamentals.</p>
                </div>
              </Link>
            </div>
            <div class="col-sm-6">
              <Link className="card" to="/quiz">
                <div class="card-body">
                  <i class="fa fa-dollar-sign" />
                  <h2 class="card-title">Down to Business</h2>
                  <p class="card-text">Let's find your path forward.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
