import React from "react";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />}>
          <Route path=":symbol" element={<Price />} />
        </Route>
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </div>
  );
};

export default App;
