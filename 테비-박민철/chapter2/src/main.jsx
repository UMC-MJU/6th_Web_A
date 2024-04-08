import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Counter from "./practice/counter";
import Modal from "./practice/modal/index.jsx";
import TodoList from "./mission/todo-list/index.jsx";
import MoviePoster from "./mission/movie-poster/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/movie-poster" element={<MoviePoster />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
