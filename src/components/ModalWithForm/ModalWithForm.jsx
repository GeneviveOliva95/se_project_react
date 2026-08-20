import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <form className="modal__form">
        <p className="modal__title">New garment</p>
        {/* <button className="modal__exit-button" type="button"></button> */}
        {/* Modify exit button to contain icon*/}
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
          <legend className="modal__legend">
            Select the weather type &#58;
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
        <button className="modal__add-garment-button">Add garment</button>
      </form>
    </div>
  );
}

export default ModalWithForm;
