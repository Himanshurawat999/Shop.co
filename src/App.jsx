import React from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Logos from "./Logos";
import Products from "./Products";

function App() {
  return (
    <main className="w-full min-h-screen h-full font-plus">
      <Nav />
      <Hero />
      <Logos />
      <Products />
    </main>
  );
}

export default App;
