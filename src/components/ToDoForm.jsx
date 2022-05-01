import React, {useState} from "react";
import "../components/All.css";

const ToDoForm = ({addTask}) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form id="form-area" onSubmit={handleSubmit}>
      <input
        id="userInput"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button id="submitButton">Submit</button>
    </form>
  );
};

export default ToDoForm;
