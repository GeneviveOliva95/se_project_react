import "./ModalWithForm.css";
import exitLogo from "../../assets/exit.svg";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button className="modal__exit-button" type="button">
          <img className="modal__exit-logo" src={exitLogo} alt="Exit logo" />
        </button>
        <form className="modal__form">
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
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input className="modal__radio-input" type="radio" id="hot" /> Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input className="modal__radio-input" type="radio" id="warm" />{" "}
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input className="modal__radio-input" type="radio" id="cold" />{" "}
              Cold
            </label>
          </fieldset>
          <button className="modal__add-garment-button" type="submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
