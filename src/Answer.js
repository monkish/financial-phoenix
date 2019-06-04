import React from "react";

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text, active: false, type: props.type };
  }

  onClick() {
    this.setState(state => {
      //todo: keep track of answers selected
      //state.answers.push(chosen);
      state.active = true;
      return state;
    });
  }

  render() {
    //var clazz = this.state.active ? 'answer active' : 'answer';
    console.log(this.state.type);
    return (
      <label className="btn btn-secondary">
        <input
          key={this.state.text.toString()}
          type={this.state.type}
          onClick={this.onClick.bind(this)}
        />
        <span className="value">{this.state.text}</span>
      </label>
    );
  }
}

export default Answer;
