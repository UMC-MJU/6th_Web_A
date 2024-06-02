import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Modal from "./modal/Modal";
import Counter from "./counter/Counter";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My React Project</h1>
        <nav>
          <ul>
            <li>
              <Link to="/modal">Modal Page</Link>
            </li>
            <li>
              <Link to="/counter">Counter Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/modal" element={<Modal />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
