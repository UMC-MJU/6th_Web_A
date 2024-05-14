import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h2>실습</h2>
      <ol>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/modal">Modal</Link>
        </li>
      </ol>
      <h2>미션</h2>
      <ol>
        <li>
          <Link to="/todo-list">Todo List</Link>
        </li>
        <li>
          <Link to="/movie-poster">Movie Poster</Link>
        </li>
      </ol>
    </div>
  );
}

export default App;
