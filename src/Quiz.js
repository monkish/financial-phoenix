'use strict';
import React, {useState} from 'react';

import Question from './Question';
import Result from './Result';

function Quiz() {
  const [index, setIndex] = useState(0);


    var title = [
      "What is your age?",
      "What is your household income?",
      "Does anyone depend on you financially?",
      "What kind of debt do you carry?",
      "What is your current level of education?",
      ""
    ];
    var options = [
      ["15 - 20", "20 - 30", "31 - 40", "41+"],
      ["No income", "Under $31,000", "Over $31,000"],
      ["None", "Kids", "Spouse", "Parents/Grandparents"],
      ["None", "Credit Cards", "Student Loans", "Auto Loans", "Other"],
      ["None", "Highschool \\ No college", "Highschool \\ Going to college", "College degree(s)"],
      []
    ];
    var single = [
      true,
      true,
      false,
      false,
      true,
      true
    ];
    var i = index;
    if (i < title.length){
      return <div>
        <Question key={title[i]} text={title[i]} answers={options[i]} ignoreNext={single[i]}/>
        <a onClick={() => setIndex(index + 1)} className='next btn btn-primary'>Next</a>
        </div>;
    } else {
      return <Result/>;
    }

}


export default Quiz;
// const domContainer = document.querySelector('#fp-quiz');
// ReactDOM.render(e(Quiz), domContainer);
