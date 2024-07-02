import React from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const formattedTime = currentDate.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="App">
      <div className="header">
        <div className="date-time">
          <div>{formattedDate}</div>
          <div>{formattedTime}</div>
        </div>
      </div>
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default App;
