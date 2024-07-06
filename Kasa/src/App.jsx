import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/Home";
import House from "./pages/House";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./component/footer";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/logement/:id" element={<House />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;