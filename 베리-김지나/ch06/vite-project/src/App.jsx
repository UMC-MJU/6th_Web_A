import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComingPage from "./pages/UpComing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/popular/:id" element={<MovieDetailPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
`;
