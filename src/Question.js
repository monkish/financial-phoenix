import React from "react";

import Answer from "./Answer";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      answers: props.answers,
      ignoreNext: props.ignoreNext
    };
  }

  render() {
    var array = [];
    for (var i = 0; i < this.state.answers.length; i++) {
      var answer = this.state.answers[i];

      var t = "checkbox";
      if (this.state.ignoreNext) {
        t = "radio";
      }

      array.push(<Answer key={answer.toString()} text={answer} type={t} />);
    }

    return (
      <h2>
        {this.state.text}
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          {array}
        </div>
      </h2>
    );
  }
}

export default Question;
