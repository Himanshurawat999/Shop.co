import React from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Logos from "./Logos";
import Products from "./Products";
import Collections from "./Collections";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function App() {
  return (
    <main className="font-plus mx-auto h-full min-h-screen w-full max-w-[1400px]">
      <Nav />
      <Hero />
      <Logos />
      <Products />
      <Collections />
      <Reviews />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
