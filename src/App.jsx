import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Deals from "./components/Deals";
import Review from "./components/Review";
import SpecialMenu from "./components/SpecialMenu";
import Footer from "./components/Footer";
import CustomizeBurger from "./pages/CustomizeBurger";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="menu" id="menu">
        <Menu />
      </div>
      <div id="deals">
        <Deals />
      </div>
      <div id="special">
        <SpecialMenu />
      </div>
      <div id="review">
        <Review />
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<CustomizeBurger />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
