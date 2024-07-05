import "./ConnexionEmployer.css";
import { Link } from "react-router-dom";

function ConnexionEmployeur() {
  return (
    <div className="background-container-connexion1">
      <div className="form-container-connexion-emp">
        <div className="iconhome-connexion">
          <Link to="/">
            <img
              className="home-icon"
              src="../../src/assets/images/home.svg"
              alt="home icon"
            />
          </Link>
        </div>
        <h1 className="title">Se connecter</h1>
        <p className="text-connexion">
          Entrez vos identifiants pour accéder à votre compte
        </p>
        <form>
          <div>
            <label className="form-label-connexion-emp">
              Adresse email
              <input type="email" placeholder="Entrez votre email" />
            </label>
          </div>
          <div>
            <label className="form-label-connexion-emp">
              Mot de passe
              <input type="password" placeholder="Entrez votre mot de passe" />
              <a href="https://alzheimer-recherche.org/la-maladie-alzheimer/symptomes-et-diagnostic/testez-votre-memoire/">
                Mot de passe oublié
              </a>
            </label>
          </div>
          <div className="remember-emp">
            <input type="checkbox" id="remember" />
            <label className="remember-days" htmlFor="remember">
              Remember for 30 days
            </label>
          </div>
          <button type="submit">Se connecter</button>
          <div className="or-divider">
            <span>OU</span>
          </div>
          <div className="social-login">
            <button type="button" className="google-login-connexion">
              Se connecter avec Google
            </button>
            <button type="button" className="apple-login-connexion">
              Se connecter avec Apple
            </button>
          </div>
          <div className="signup-container">
            <div>Vous n'avez pas de compte? </div>
            <div>
              <Link to="/inscription-employeur">
                <a href="www.">s'inscrire</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConnexionEmployeur;
