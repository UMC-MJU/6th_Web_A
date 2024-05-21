import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { LoginProvider, LoginContext } from "./contexts/LoginContext";

const Container = styled.div`
  position: relative;
  background-color: rgba(15, 9, 59, 0.856);
`;

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = React.useContext(LoginContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/popular"
              element={
                <ProtectedRoute>
                  <PopularPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/popular/:id"
              element={
                <ProtectedRoute>
                  <MovieDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/nowplaying"
              element={
                <ProtectedRoute>
                  <NowPlayingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/nowplaying/:id"
              element={
                <ProtectedRoute>
                  <MovieDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/toprated"
              element={
                <ProtectedRoute>
                  <TopRatedPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/toprated/:id"
              element={
                <ProtectedRoute>
                  <MovieDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/upcoming"
              element={
                <ProtectedRoute>
                  <UpcomingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/upcoming/:id"
              element={
                <ProtectedRoute>
                  <MovieDetailPage />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
