import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [isLampOn, setIsLampOn] = React.useState(false);

  async function clickOnLamp() {
    if (!isLampOn) {
      await axios.get("");
    }
  }

  async function clickOffLamp() {
    if (isLampOn) {
      await axios.get("");
    }
  }

  return (
    <div class="container">
      <a class="button button3" href="#" onClick={clickOnLamp}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Включить
      </a>
      <a class="button button2" href="#" onClick={clickOffLamp}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Выключить
      </a>
    </div>
  );
}

export default App;
