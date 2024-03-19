import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/index";
import { Room, HomePage } from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
};

export default App;
