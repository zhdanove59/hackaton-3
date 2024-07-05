import "./RecapCv.css";
import { Link } from "react-router-dom";

function RecapCv() {
  return (
    <div className="body-recap">
      <div className="container-recap">
        <div className="iconhome1">
          <Link to="/">
            <img
              className="home-icon1"
              src="../../src/assets/images/home.svg"
              alt="home icon"
            />
          </Link>
        </div>
        <h2 className="h2-recap">Récapitulatif de votre CV inclusif</h2>
        <div className="section-recap">
          <h4 className="h4-recap">Résumé Professionnel</h4>
          <p className="p-recap">
            Professionnel expérimenté en comptabilité, spécialisé en gestion de
            projets inclusifs et en communication interculturelle. Passionné par
            la promotion de la diversité et l'inclusion dans le milieu de
            travail.
          </p>
          <h4 className="h4-recap">Compétences Clés</h4>
          <p className="p-recap">
            Gestion de projets | Diversité et inclusion | Communication
            interculturelle | Leadership
          </p>
          <h4 className="h4-recap">Expérience Professionnelle</h4>
          <p className="p-recap">
            Chef de Projet Senior | Entreprise XYZ | Paris | 2018 - Présent
            Dirigé des équipes multiculturelles, mis en œuvre des initiatives de
            diversité. Responsable Communication | Entreprise ABC | Lyon | 2013
            - 2017 Conçu des stratégies de communication inclusives, organisé
            des ateliers sur l'inclusion.
          </p>
          <h4 className="h4-recap"> Formation</h4>
          <p className="p-recap">
            Master en Gestion des Ressources Humaines | Université de Paris |
            2012 Licence en Communication | Université de Lyon | 2010
          </p>
          <h4 className="h4-recap">Langues</h4>
          <p className="p-recap">
            Français | Anglais (courant) | Espagnol (intermédiaire)
          </p>
        </div>
        <h4 className="h4-center">Merci pour votre candidature!</h4>
      </div>
    </div>
  );
}

export default RecapCv;
