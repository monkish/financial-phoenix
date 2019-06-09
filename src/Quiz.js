"use strict";
import React, { useState } from "react";

import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState([]);

  function trackActive(index, selected) {
    setActive(selected);
  }

  var title = [
    "What is your age?",
    "What is your household income?",
    "Does anyone depend on you financially?",
    "What kind of debt do you carry?",
    "What is your current level of education?"
  ];
  var options = [
    ["15 - 20", "20 - 30", "31 - 40", "41+"],
    ["No income", "Under $31,000", "Over $31,000"],
    ["None", "Kids", "Spouse", "Parents/Grandparents"],
    ["None", "Credit Cards", "Student Loans", "Auto Loans", "Other"],
    [
      "None",
      "Highschool \\ No college",
      "Highschool \\ Going to college",
      "College degree(s)"
    ]
  ];
  var single = [true, true, false, false, true, true];
  var i = index;

  if (i < title.length) {
    return (
      <div className="quiz">
        <div className="body-container">
          <div className="section">
            <div className="page-center-small">
              <Question
                key={title[i]}
                text={title[i]}
                answers={options[i]}
                ignoreNext={single[i]}
                setNext={() => setIndex(index + 1)}
                setActive={v => trackActive(index, v)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Result selected={active} />;
  }
}

export default Quiz;
// const domContainer = document.querySelector('#fp-quiz');
// ReactDOM.render(e(Quiz), domContainer);
