import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import styled from "styled-components";
import { LoginProvider } from "./contexts/LoginContext";

const Container = styled.div`
  position: relative;
  background-color: rgba(15, 9, 59, 0.856);
`;

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />{" "}
            {/* Add LoginPage route */}
            <Route path="/popular" element={<PopularPage />} />
            {/* 동적 라우팅 */}
            <Route path="/popular/:id" element={<MovieDetailPage />} />
            <Route path="/nowplaying" element={<NowPlayingPage />} />
            <Route path="/nowplaying/:id" element={<MovieDetailPage />} />
            <Route path="/toprated" element={<TopRatedPage />} />
            <Route path="/toprated/:id" element={<MovieDetailPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/upcoming/:id" element={<MovieDetailPage />} />
            {/* Not Found */}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
