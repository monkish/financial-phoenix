'use strict';

const e = React.createElement;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], index: 0};
  }

  onClick() {
    console.log(this.props.children);
    this.setState((state) => {
      //todo: keep track of answers selected
      //state.answers.push(chosen);
      state.index = state.index + 1;
      return state;
    });
  }

  render() {
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
      ["None", "Highschool \\ No college", "Highschool \\ Going to college", "College degree(s)"]
    ];
    var single = [
      true,
      true,
      false,
      false,
      true
    ];
    var i = this.state.index;
    if (i < title.length){
      var questions = e( Question, {key: title[i], text: title[i], answers: options[i], ignoreNext: single[i]});
      var nextButton = e('a', {onClick: this.onClick.bind(this), className:'next btn btn-primary'}, 'Next');
      return e(
        'div',
        null,
        questions,
        nextButton
      );
    } else {
      return e('a', {className:"next btn btn-primary finish"}, "Finished!");
    }
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text : props.text, answers: props.answers, ignoreNext: props.ignoreNext};
  }

  render() {
    var array = [];
    for (var i = 0; i < this.state.answers.length; i++) {
      var answer = this.state.answers[i];

      var t = 'checkbox';
      if (this.state.ignoreNext) {
        t = 'radio';
      }

      array.push( e(Answer, {key: answer.toString(), text: answer, type: t}));
    }

    return e('h2',
      null,
      this.state.text,
      e(
        'div',
        {className:"btn-group btn-group-toggle", 'data-toggle':"buttons"},
        array
      )
    );

  }

}

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text : props.text, active: false, type: props.type};
  }

  onClick() {
    this.setState((state) => {
      //todo: keep track of answers selected
      //state.answers.push(chosen);
      state.active = true;
      return state;
    });

  }

  render() {
    //var clazz = this.state.active ? 'answer active' : 'answer';
    console.log(this.state.type);
    return e(
      'label',
      {className:'btn btn-secondary'},
      e('input', {key: this.state.text.toString(), type: this.state.type,
        //className: clazz,
        onClick: this.onClick.bind(this)}),
      e('span', {className:'value'}, this.state.text)
    );
  }
}




const domContainer = document.querySelector('#fp-quiz');
ReactDOM.render(e(Quiz), domContainer);
