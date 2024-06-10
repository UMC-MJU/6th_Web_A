import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      {/* 테스트 커밋 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<MovieDetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/popular/:id" element={<MovieDetailPage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/now-playing/:id" element={<MovieDetailPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/top-rated/:id" element={<MovieDetailPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/upcoming/:id" element={<MovieDetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
