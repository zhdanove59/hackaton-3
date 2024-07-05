import { Link } from "react-router-dom";
import "./Accueil.css";
import { useState } from "react";

function Accueil() {
  const [connexion, setConnexion] = useState(false);
  return (
    <>
      <Link to="/inscription-candidat">
        <button type="button" className="button-candidat">
          .
        </button>
      </Link>
      <Link to="/inscription-employeur">
        <button type="button" className="button-employeur">
          .
        </button>
      </Link>
      {/* {<Link to="/EmployeurConnexion">} */}
      <button
        type="button"
        className="button-connexion"
        onClick={() => {
          setConnexion(!connexion);
        }}
      >
        {connexion && (
          <div className="set-button-connexion">
            <Link to ="/login-candidat">
            <button type="button" className="button-set" id="button-vert">
              CANDIDAT
            </button>
            </Link>
            <Link to = "/login-employer">
            <button type="button" className="button-set" id="button-blue">
              EMPLOYEUR
            </button>
            </Link>
          </div>
        )}
        .
      </button>
      {/* {</Link>} */}
      <img
        src="src/assets/images/Page d'accueil.png"
        alt="salut"
        className="image-acceuil"
      />
    </>
  );
}
export default Accueil;
