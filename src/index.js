import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Carousel from "./carousel";

function App() {
  return <Carousel />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
