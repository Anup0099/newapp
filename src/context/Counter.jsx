import { createContext, useState } from "react";
import Counter from "../Counter";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(23);  
  return (
    <CounterContext.Provider value={{count,name:"anup",setCount}} >
      {props.children}

    </CounterContext.Provider>
  );
};
