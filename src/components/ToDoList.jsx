import React from "react";
import ToDo from "../components/ToDo";
import "../components/All.css";

const ToDOList = ({toDoList, handleToggle, handleFilter}) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button id="btn" style={{margin: "20px"}} onClick={handleFilter}>
        Clear ToDo
      </button>
    </div>
  );
};

export default ToDOList;
