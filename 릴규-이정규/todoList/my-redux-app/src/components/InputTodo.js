import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import "./InputTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState({ id: 0, text: "" });

  const handleText = (e) => setTodolist({ text: e.target.value });
  const onReset = () => setTodolist({ text: "" });

  return (
    <div className="InputTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else {
            alert("Please enter a todo!");
          }
          onReset();
        }}
      >
        <div className="input-container">
          <input
            type="text"
            value={todolist.text}
            onChange={handleText}
            className="textbar"
            placeholder="할 일을 입력하세요"
          />
          <button type="submit" className="submitbutton">
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
