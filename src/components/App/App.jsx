import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview-card-image");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && activeModal) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header onAddClick={handleAddClick} />
        <Main
          weatherData={weatherData}
          defaultClothingItems={clothingItems}
          handleCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        name="add-garment"
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
        onModalOverlayClick={handleModalOverlayClick}
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
      <ItemModal
        isOpen={activeModal === "preview-card-image"}
        card={selectedCard}
        onClose={handleCloseModal}
        onModalOverlayClick={handleModalOverlayClick}
      />
    </div>
  );
}

export default App;
