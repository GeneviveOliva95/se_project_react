import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} defaultClothingItems={clothingItems} />
      </div>
    </div>
  );
}

export default App;
