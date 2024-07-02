import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import "./TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todolist.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => dispatch(complete(todo.id))}
            className="checkbox"
          />
          <span
            className="todolist"
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(remove(todo.id))}
            className="deleteBtn"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
