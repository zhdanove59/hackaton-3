import "./Profils.css";
import { Link } from "react-router-dom";

function ProfileCard() {
  return (
    <div className="body-profils">
      <button className="profil-retour" type="button">
        .
      </button>
      <section className="profils">
        <Link to="/">
          <img
            className="home-icon"
            src="../../src/assets/images/home.svg"
            alt="home icon"
          />
        </Link>
        <h1 className="h1-profils">Profils candidats pour cette offre</h1>
        <div className="cards">
          <div className="profile-card">
            <img
              src="src/assets/images/Green Smiley.png"
              alt="je sais pas"
              className="profile-image"
            />
            <h2 className="profile-name">CANDIDAT 1 </h2>
            <h4 className="profile-ref">J 3 B 7 R 4 T X</h4>
            <p className="profile-title">CHOMEUR</p>
          </div>
          <div className="profile-card">
            <img
              src="src/assets/images/Green Smiley.png"
              alt="je sais pas"
              className="profile-image"
            />
            <h2 className="profile-name">CANDIDAT 2</h2>
            <h4 className="profile-ref">J 3 B 7 R 4 T X</h4>
            <p className="profile-title">CHOMEUR</p>
          </div>
          <div className="profile-card">
            <img
              src="src/assets/images/Green Smiley.png"
              alt="je sais pas"
              className="profile-image"
            />
            <h2 className="profile-name">CANDIDAT 3</h2>
            <h4 className="profile-ref"> J 3 B 7 R 4 T X</h4>
            <p className="profile-title">CHOMEUR</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileCard;
