import React, { Component } from "react";
import axios from "axios";
export default class AxiosComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("response", response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        console.log("finally block executed");
      });
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
