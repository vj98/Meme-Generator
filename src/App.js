import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllMemes from "./components/AllMemes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllMemes />} />
      </Routes>
    </>
  );
}

export default App;
