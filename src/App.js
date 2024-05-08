import React from "react";
import { Routes, Route } from "react-router-dom";
import TranslationApp from "./pages/TranslationApp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TranslationApp />} />
      </Routes>
    </div>
  );
}

export default App;
