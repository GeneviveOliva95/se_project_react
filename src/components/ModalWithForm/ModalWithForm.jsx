import "./ModalWithForm.css";
import exitLogo from "../../assets/exit.svg";

function ModalWithForm({
  name,
  children,
  title,
  buttonText,
  isOpen,
  onClose,
  onModalOverlayClick,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={onModalOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__exit-button" type="button" onClick={onClose}>
          <img className="modal__exit-logo" src={exitLogo} alt="Exit logo" />
        </button>
        <form className="modal__form" name={name}>
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
