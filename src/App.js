import { useContext } from 'react';
import Contact from './Contact';
import TestClass from './TestClass';
import ButtonHandlerClass from './ButtonHandler';
import EventHandlerClass from './EventHandlerClass';
import { CounterContext } from './context/Counter';
import Counter from './Counter';
import TodoClass from './TodoClass';
import AxiosComponent from './AxiosComponent';
import ListEmployees from './Components/ListEmployees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
const isMorning = false;
const morningText = "good morning";
const afternoonText = "good afternoon";
const greetingEvent = isMorning ? morningText : afternoonText;
const handleCLick = (state) => {
  console.log("i was clicked", state);
}
function App() {
  const counterState = useContext(CounterContext);
  console.log("context", counterState);
  return (
    <div className="container">
      <BrowserRouter>

        <Routes>
          <Route index element={<ListEmployees />} />
          <Route path="/list-employees" element={<ListEmployees />} />
          <Route path="/add-employee" element={<AddEmployee />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
