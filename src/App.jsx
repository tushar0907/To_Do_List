import React, {useState} from "react";
import "./App.css";
import Header from "./components/header";
import data from "./components/data.json";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? {...task, complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      {id: toDoList.length + 1, task: userInput, complete: false},
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <div className="area">
        <Header />
        <ToDoForm addTask={addTask} />
      </div>

      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
