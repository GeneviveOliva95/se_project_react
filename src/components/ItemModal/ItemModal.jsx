import "./ItemModal.css";
import exitLogoWhite from "../../assets/exit-white.svg";

function ItemModal({ name, isOpen, onClose, onModalOverlayClick, card }) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={onModalOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button className="modal__exit-button" type="button" onClick={onClose}>
          <img
            className="modal__exit-logo"
            src={exitLogoWhite}
            alt="Exit logo"
          />
        </button>
        <img className="modal__image" src={card.link} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather&#58; {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
