import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} defaultClothingItems={clothingItems} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        handleCloseModal={handleCloseModal}
      >
        <div className="modal__container">
          <label htmlFor="name" className="modal__label">
            Name
          </label>
          <input
            className="modal__input"
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="modal__container">
          <label htmlFor="imageUrl" className="modal__label">
            Image
          </label>
          <input
            className="modal__input"
            type="text"
            id="imageUrl"
            placeholder="Image URL"
          />
        </div>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__label modal__legend">
            Select the weather type&#58;
          </legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input className="modal__radio-input" type="radio" id="hot" /> Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input className="modal__radio-input" type="radio" id="warm" /> Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input className="modal__radio-input" type="radio" id="cold" /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
