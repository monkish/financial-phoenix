import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Answer from "./Answer";

function Question(props) {
  const [text, setText] = useState(props.text);
  const [answers, setAnswers] = useState(props.answers);
  const [ignoreNext, setIgnoreNext] = useState(props.ignoreNext);
  var array = [];

  var t = "checkbox";
  if (ignoreNext) {
    t = "radio";
  }
  for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    array.push(
      <ToggleButton variant="secondary" name={t} value={answer.toString()}>
        {answer}
      </ToggleButton>
    );
  }

  return (
    <div className="card text-center">
      <div className="subtitle">Tell me about yourself:</div>
      <div id="fp-quiz">
        <div>
          <h2>
            {text}

            <ToggleButtonGroup
              name="test"
              type={t}
              onChange={v => props.setActive(v)}
            >
              {array}
            </ToggleButtonGroup>
          </h2>
          <Button onClick={props.setNext} variant="primary" className="next">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
