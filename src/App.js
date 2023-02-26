import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PageOne from "./Components/PageOne";
import Signin from "./Components/Signin";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="pageone" element={<PageOne />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
