import React, { Component } from "react";

export default class TodoClass extends Component {
  constructor() {
    super();
    this.state = {
      taskArray: ["Task1", "Task2", "Task3"],
      textContents: "",
    };
    console.log("constructor is called");
  }

  componentDidMount() {
    console.log("componentDidMount is called");
    // Example: Fetch data from an API when the component mounts
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate is called");
    // Only re-render if taskArray or textContents has changed
    if (nextState.textContents !== this.state.textContents || nextState.taskArray !== this.state.taskArray) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate is called");
    if (prevState.taskArray !== this.state.taskArray) {
      console.log("Task list updated!");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
    // Clean up tasks like removing event listeners or cancelling API requests
  }

  handleChange = (e) => {
    this.setState({ textContents: e.target.value });
  };

  buttonClick = () => {
    let newArray = [...this.state.taskArray];
    newArray.push(this.state.textContents);
    this.setState({ taskArray: newArray, textContents: "" });
    console.log("task is getting added");
  };

  deleteHandler = (index) => {
    let newArray = [...this.state.taskArray];
    newArray.splice(index, 1);
    this.setState({ taskArray: newArray });
    console.log("delete button clicked and element deleted");
  };

  render() {
    console.log("render is called");
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.buttonClick}>Add Button</button>
        <ul>
          {this.state.taskArray.map((task, index) => {
            return (
              <li key={index}>
                {task}
                <button onClick={() => this.deleteHandler(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <h1>{this.state.textContents}</h1>
      </div>
    );
  }
}
