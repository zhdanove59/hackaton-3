import { useState } from "react";
import "./FormEmployer.css"; // Assurez-vous d'importer le fichier CSS
import { Link } from "react-router-dom";

function FormEmployer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [textarea, setTextArea] = useState();
  const tableau = [];

  const handleButtonClick = () => {
    if (
      textarea.includes("homme") ||
      textarea.includes("femme") ||
      textarea.includes("fille") ||
      textarea.includes("garçon") ||
      textarea.includes("masculin") ||
      textarea.includes("féminin") ||
      textarea.includes("maternité") ||
      textarea.includes("paternité") ||
      textarea.includes("grossesse") ||
      textarea.includes("'âge") ||
      textarea.includes("jeune") ||
      textarea.includes("vieux") ||
      textarea.includes("senior") ||
      textarea.includes("junior") ||
      textarea.includes("dynamique") ||
      textarea.includes("jeune") ||
      textarea.includes("âge") ||
      textarea.includes("race") ||
      textarea.includes("caucasien") ||
      textarea.includes("blanc") ||
      textarea.includes("black") ||
      textarea.includes("noir") ||
      textarea.includes("asiatique") ||
      textarea.includes("africain") ||
      textarea.includes("arabe") ||
      textarea.includes("hispano") ||
      textarea.includes("origine") ||
      textarea.includes("religion") ||
      textarea.includes("chrétien") ||
      textarea.includes("musulman") ||
      textarea.includes("juif") ||
      textarea.includes("hindou") ||
      textarea.includes("pratiquant") ||
      textarea.includes("sexuelle") ||
      textarea.includes("hétérosexuel") ||
      textarea.includes("bisexuel") ||
      textarea.includes("lgbt") ||
      textarea.includes("lgbtq") ||
      textarea.includes("homosexuel") ||
      textarea.includes("dynamique") ||
      textarea.includes("gay") ||
      textarea.includes("lesbienne") ||
      textarea.includes("handicapé") ||
      textarea.includes("handicap") ||
      textarea.includes("valide") ||
      textarea.includes("physique") ||
      textarea.includes("restriction") ||
      textarea.includes("malvoyant") ||
      textarea.includes("sourd") ||
      textarea.includes("malentendant") ||
      textarea.includes("familiale") ||
      textarea.includes("célibataire") ||
      textarea.includes("marié") ||
      textarea.includes("enfants") ||
      textarea.includes("foyer") ||
      textarea.includes("apparence") ||
      textarea.includes("belle") ||
      textarea.includes("beau") ||
      textarea.includes("belle") ||
      textarea.includes("jolie") ||
      textarea.includes("joli") ||
      textarea.includes("mince") ||
      textarea.includes("nationalité") ||
      textarea.includes("citoyen") ||
      textarea.includes("nationalité") ||
      textarea.includes("expatrié") ||
      textarea.includes("résident") ||
      textarea.includes("sociale") ||
      textarea.includes("économique") ||
      textarea.includes("maladies") ||
      textarea.includes("fumeur") ||
      textarea.includes("diplômé") ||
      textarea.includes("vétéran") ||
      textarea.includes("dynamique") ||
      textarea.includes("énergique")
    ) {
      if (textarea.includes("homme")) {
        tableau.push(" homme ");
      }
      if (textarea.includes("femme")) {
        tableau.push(" femme ");
      }
      if (textarea.includes("fille")) {
        tableau.push(" fille ");
      }
      if (textarea.includes("garçon")) {
        tableau.push(" garçon ");
      }
      if (textarea.includes("masculin")) {
        tableau.push(" masculin ");
      }
      if (textarea.includes("féminin")) {
        tableau.push(" féminin ");
      }
      if (textarea.includes("maternité")) {
        tableau.push(" maternité ");
      }
      if (textarea.includes("paternité")) {
        tableau.push(" paternité ");
      }
      if (textarea.includes("grossesse")) {
        tableau.push(" grossesse ");
      }
      if (textarea.includes("'âge")) {
        tableau.push(" 'âge ");
      }
      if (textarea.includes("jeune")) {
        tableau.push(" jeune ");
      }
      if (textarea.includes("vieux")) {
        tableau.push(" vieux ");
      }
      if (textarea.includes("senior")) {
        tableau.push(" senior ");
      }
      if (textarea.includes("junior")) {
        tableau.push(" junior ");
      }
      if (textarea.includes("dynamique")) {
        tableau.push(" dynamique ");
      }
      if (textarea.includes("âge")) {
        tableau.push(" âge ");
      }
      if (textarea.includes("race")) {
        tableau.push(" race ");
      }
      if (textarea.includes("caucasien")) {
        tableau.push(" caucasien ");
      }
      if (textarea.includes("blanc")) {
        tableau.push(" blanc ");
      }
      if (textarea.includes("black")) {
        tableau.push(" black ");
      }
      if (textarea.includes("noir")) {
        tableau.push(" noir ");
      }
      if (textarea.includes("asiatique")) {
        tableau.push(" asiatique ");
      }
      if (textarea.includes("africain")) {
        tableau.push(" africain ");
      }
      if (textarea.includes("arabe")) {
        tableau.push(" arabe ");
      }
      if (textarea.includes("hispano")) {
        tableau.push(" hispano ");
      }
      if (textarea.includes("origine")) {
        tableau.push(" origine ");
      }
      if (textarea.includes("religion")) {
        tableau.push(" religion ");
      }
      if (textarea.includes("chrétien")) {
        tableau.push(" chrétien ");
      }
      if (textarea.includes("musulman")) {
        tableau.push(" musulman ");
      }
      if (textarea.includes("juif")) {
        tableau.push(" juif ");
      }
      if (textarea.includes("hindou")) {
        tableau.push(" hindou ");
      }
      if (textarea.includes("pratiquant")) {
        tableau.push(" pratiquant ");
      }
      if (textarea.includes("sexuelle")) {
        tableau.push(" sexuelle ");
      }
      if (textarea.includes("hétérosexuel")) {
        tableau.push(" hétérosexuel ");
      }
      if (textarea.includes("bisexuel")) {
        tableau.push(" bisexuel ");
      }
      if (textarea.includes("lgbt")) {
        tableau.push(" lgbt ");
      }
      if (textarea.includes("lgbtq")) {
        tableau.push(" lgbtq ");
      }
      if (textarea.includes("homosexuel")) {
        tableau.push(" homosexuel ");
      }
      if (textarea.includes("gay")) {
        tableau.push(" gay ");
      }
      if (textarea.includes("lesbienne")) {
        tableau.push(" lesbienne ");
      }
      if (textarea.includes("handicapé")) {
        tableau.push(" handicapé ");
      }
      if (textarea.includes("handicap")) {
        tableau.push(" handicap ");
      }
      if (textarea.includes("valide")) {
        tableau.push(" valide ");
      }
      if (textarea.includes("physique")) {
        tableau.push(" physique ");
      }
      if (textarea.includes("restriction")) {
        tableau.push(" restriction ");
      }
      if (textarea.includes("malvoyant")) {
        tableau.push(" malvoyant ");
      }
      if (textarea.includes("sourd")) {
        tableau.push(" sourd ");
      }
      if (textarea.includes("malentendant")) {
        tableau.push(" malentendant ");
      }
      if (textarea.includes("familiale")) {
        tableau.push(" familiale ");
      }
      if (textarea.includes("célibataire")) {
        tableau.push(" célibataire ");
      }
      if (textarea.includes("marié")) {
        tableau.push(" marié ");
      }
      if (textarea.includes("enfants")) {
        tableau.push(" enfants ");
      }
      if (textarea.includes("foyer")) {
        tableau.push(" foyer ");
      }
      if (textarea.includes("apparence")) {
        tableau.push(" apparence ");
      }
      if (textarea.includes("belle")) {
        tableau.push(" belle ");
      }
      if (textarea.includes("beau")) {
        tableau.push(" beau ");
      }
      if (textarea.includes("jolie")) {
        tableau.push(" jolie ");
      }
      if (textarea.includes("joli")) {
        tableau.push(" joli ");
      }
      if (textarea.includes("mince")) {
        tableau.push(" mince ");
      }
      if (textarea.includes("nationalité")) {
        tableau.push(" nationalité ");
      }
      if (textarea.includes("citoyen")) {
        tableau.push(" citoyen ");
      }
      if (textarea.includes("expatrié")) {
        tableau.push(" expatrié ");
      }
      if (textarea.includes("résident")) {
        tableau.push(" résident ");
      }
      if (textarea.includes("sociale")) {
        tableau.push(" sociale ");
      }
      if (textarea.includes("économique")) {
        tableau.push(" économique ");
      }
      if (textarea.includes("niveau de vie")) {
        tableau.push(" niveau de vie ");
      }
      if (textarea.includes("maladies")) {
        tableau.push(" maladies ");
      }
      if (textarea.includes("fumeur")) {
        tableau.push(" fumeur ");
      }
      if (textarea.includes("diplômé")) {
        tableau.push(" diplômé ");
      }
      if (textarea.includes("vétéran")) {
        tableau.push(" vétéran ");
      }
      if (textarea.includes("énergique")) {
        tableau.push(" énergique ");
      }

      alert(`les mots ${tableau} ne sont pas autorisé dans la description`);
    } else {
      setIsPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const area = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <div className="background-container">
      <div className="form-container-employer">
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
              <textarea placeholder="" onChange={area} />
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
              <Link to="/ProfilsRetour">
                <button type="button" className="btn_label">
                  Voir Profils Candidats
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormEmployer;
