import Header from "@components/Header";
import "./App.css";
import React, { ReactNode } from "react";
import Body from "@components/Body";
import Footer from "@components/Footer";

const App = (): ReactNode => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
