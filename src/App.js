import React from "react";
import { Routes, Route } from "react-router-dom";
// import { LoginPage } from "./pages/index";
import { Room, HomePage } from "./pages/index";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      <Route path="*" component={<h1>NotFoundComponent</h1>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
};

export default App;
