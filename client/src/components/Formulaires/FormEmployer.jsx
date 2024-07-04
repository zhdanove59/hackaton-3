import { useState } from "react";
import "./FormEmployer.css"; // Assurez-vous d'importer le fichier CSS

function FormEmployer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <h1 className="title">EMPLOYEUR</h1>
        <form>
          <div>
            <label>
              Nom de l'entreprise
              <input type="text" placeholder="" />
            </label>
          </div>
          <div>
            <label>
              Domaine d'activité
              <input type="text" placeholder="" />
            </label>
          </div>
          <div>
            <label>
              Titre de l'annonce
              <input type="text" placeholder="" />
            </label>
          </div>
          <div>
            <label>
              Description
              <textarea placeholder="" />
            </label>
          </div>
          <div className="btn_flex">
            <button
              className="btn_label"
              type="button"
              onClick={handleButtonClick}
            >
              Demande validation Label
            </button>
          </div>
        </form>
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <button
              type="button"
              className="close-btn"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <div className="popup-content">
              <button type="button" className="btn_label">
                Voir Profils Candidats
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormEmployer;
