import React, { Component } from "react";

export default class ButtonHandlerClass extends Component {
  constructor(props) {
    console.log("constructor is fired..");
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
    this.state = {
      number: 10,
    };
  }
  clickhandler() {
    console.group("clickHandler() invoked");
    alert("Value of number " + this.number);
    this.state.number = this.state.number + 1;
  }

  render() {
    return (
      <div>
        <button onClick={this.clickhandler}> Click Me</button>
        <h1>State Variable Number: {this.state.number}</h1>
      </div>
    );
  }
}
