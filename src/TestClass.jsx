import React, { Component } from "react";

export default class TestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      x: 1,
      y: "teststring",
      staatus: false,
      sampleArray: ["one", "two"],
      sampleObject: { key1: "value", key2: "value2" },
    };
  }
  increment() {
    {
      console.log("increment gets invoked..");
    }
    // this.state.counter=this.state.counter+1;

    this.setState({ counter: 5 }); //cause the app rerender
    {
      console.log("counter: " + this.state.counter);
    }
  }
  render() {
    console.log("render method invoked");
    this.increment();
    return <div>Counter value:{this.state.counter}</div>;
  }
}
