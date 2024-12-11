import React from "react";

export default function Contact(props) {
  return (
    <div>
      {console.log(
        "value for props title recieved in contact component " +
          props.title +
          " " +
          typeof props.id +
          " " +
          props.details.name +
          " " +
          props +
          " " +
          props.name
      )}
      {props.id === 2 ? <h1>id is 2</h1> : <h1>id is not 2</h1>}
      <h1>{props.title} Contact Form </h1>
      <label>Name</label>
      <input type="text" />
      <br />
      <label>Email id</label>
      <input type="text" />
      <br />
      <label>Message</label>
      <textarea></textarea>
      <br />
      <br />
      <button>Send</button>
    </div>
  );
}
