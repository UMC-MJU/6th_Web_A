import Movie from "./components/Movie";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      {dummy.results.map((item, index) => (
        <Movie
          key={index} // Added a key prop here for better performance in list rendering
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
        />
      ))}
    </div>
  );
}

export default App;
