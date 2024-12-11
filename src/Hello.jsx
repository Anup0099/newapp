import { Fragment, useState } from "react";
import react from "react";
function greet(name) {
  return <h3>Hello {name}</h3>;
}
const greet1 = (name) => <h3>Hello from arrow method {name}</h3>;
//functional component
const a = react.createElement("h1", null, "Hello from React.createElement"); //what is React.createElement?
//how to add children to React.createElement?  We can add children to React.createElement by passing them as the third argument.
const heading = <div>hello from anup</div>;
console.log(heading);
function Hello() {
  const [counter, setCounter] = useState(0);

  const [dec, setDec] = useState(0);
  const handleClick = () => {
    console.log("clicked");
    setCounter((counter) => {
      return counter + 1;
    });
  };
  const handle = () => {
    console.log("clicked");
    setCounter((counter) => {
      return counter > 0 ? counter - 1 : 0;
    });
  };
  // var name="Kartik"
  var age = 19;
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handle}>counter</button>
      <button onClick={handleClick}>counter2</button>
    </>
  );
}
export default Hello;
