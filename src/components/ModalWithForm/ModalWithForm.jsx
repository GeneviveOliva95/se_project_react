import "./ModalWithForm.css";
import exitLogo from "../../assets/exit.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  handleCloseModal,
  handleModalOverlayClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
      onClick={handleModalOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__exit-button"
          type="button"
          onClick={handleCloseModal}
        >
          <img className="modal__exit-logo" src={exitLogo} alt="Exit logo" />
        </button>
        <form className="modal__form">
          {children}
          <button className="modal__add-garment-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
