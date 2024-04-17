import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CounterPage from "./practice/counter/page.jsx";
import ModalPage from "./practice/modalPage/page.jsx";
import TodoPage from "./missions/todo/page.jsx";
import MovieList from "./missions/movie/page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/todo-list" element={<TodoPage />} />
      <Route path="/movie-poster" element={<MovieList />} />
    </Routes>
  </BrowserRouter>
);
