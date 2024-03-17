import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/index";
import { Join } from "./components/index";
import { Room } from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Join />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
};

export default App;
