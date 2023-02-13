import React from "react";
import { BrowserRouter } from "react-router-dom";
import ListPages from "./routes";

import "../src/styles/home.css";

const App = () => {
  return (
    <BrowserRouter>
      <ListPages />
    </BrowserRouter>
  );
};

export default App;
