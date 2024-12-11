import React, { Component } from "react";

export default class EventHandlerClass extends Component {
  constructor(props) {
    console.log("constructor method is called when the component is initiated");
    super(props);
    this.state = {
      counter: 0,
      enable: false,

      techStack: ["React", "Node", "MongoDB", "Express"],
      details: [
        { name: "anup", age: 25 },
        { name: "anup", age: 25 },
      ],
    }; // Initial state
  }

  // Increment method
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
      enable: !this.state.enable,
      sampleString: "Hello, Welcome to the world ",
    });
  };

  // Decrement method
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  handleChangeEvent = () => {
    if (this.state.enable) {
      alert("Checkbox is unchecked");
    } else {
      alert("Checkbox is checked");
    }
  };

  render() {
    var myItem = this.state.techStack.map((item, k) => {
      return <li key={k}>{item}</li>;
    });
    var myDetails = this.state.details.map((item, k) => {
      return (
        <li key={k}>
          {item.name} {item.age}
        </li>
      );
    });
    return (
      <div>
        <ul>{myItem}</ul>
        <ul>
          {myDetails}
          <li>{this.state.sampleString}</li>
        </ul>
        <h1>Event Handler Class Component</h1>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        <hr />

        <label htmlFor="">
          Enter the name
          <input type="checkbox" onChange={this.handleChangeEvent} />
        </label>
        <hr />
        <label htmlFor="">
          Enter the name
          <input type="text" onChange={this.sampleString} />
        </label>
      </div>
    );
  }
}
