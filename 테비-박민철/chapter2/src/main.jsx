import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CounterPage from "./practice/counter/page.jsx";
import ModalPage from "./practice/modal/page.jsx";
import TodoListPage from "./mission/todo-list/page.jsx";
import MoviePosterPage from "./mission/movie-poster/page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/movie-poster" element={<MoviePosterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
