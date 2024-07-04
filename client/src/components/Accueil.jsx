import { Link } from "react-router-dom";
import "./Accueil.css";

function Accueil() {
  return (
    <>
      <Link to="/candidat">
        <button type="button" className="button-candidat">
          .
        </button>
      </Link>
      <Link to="/employeur">
        <button type="button" className="button-employeur">
          .
        </button>
      </Link>
      <Link to="/connexion">
        <button type="button" className="button-connexion">
          .
        </button>
      </Link>
      <img
        src="src/assets/images/Page d'accueil.png"
        alt="salut"
        className="image-acceuil"
      />
    </>
  );
}
export default Accueil;
