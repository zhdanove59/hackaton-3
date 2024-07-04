import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>À propos de nous</h2>
        <p className="about-text">
          Bienvenue sur <strong className="strong-name">EquiTalent</strong>, la
          plateforme dédiée à l'analyse des CV et des annonces d'emploi pour
          détecter et éliminer les discriminations. Notre mission est de
          promouvoir l'égalité des chances dans le recrutement en aidant les
          entreprises à adopter des pratiques de recrutement plus justes et
          inclusives.
        </p>
      </div>
      <div className="about-section">
        <h3>Notre Mission</h3>
        <p className="about-text">
          Dans un monde où la diversité et l'inclusion sont essentielles pour le
          succès des entreprises, nous avons constaté que les biais inconscients
          peuvent encore influencer les processus de recrutement. Nous avons
          créé <strong>Nom du Site</strong> pour offrir une solution innovante
          qui aide à identifier et à corriger ces biais, assurant ainsi que
          chaque candidat soit évalué uniquement sur ses compétences et
          qualifications.
        </p>
      </div>
      <div className="about-section">
        <h3>Nos Services</h3>
        <ul className="service-list">
          <li>Analyse des CV</li>
          <li>Évaluation des Annonces d'Emploi</li>
          <li>Filtres de Discrimination</li>
        </ul>
        <p className="about-text">
          Grâce à notre technologie de pointe, nous détectons les biais et
          proposons des filtres correctifs pour aider les recruteurs à se
          concentrer sur les compétences et l'expérience des candidats.
        </p>
      </div>
      <div className="about-section">
        <h3>Notre Équipe</h3>
        <p className="about-text">
          Nous sommes une équipe passionnée d'experts en ressources humaines, en
          psychologie du travail, et en développement technologique. Ensemble,
          nous combinons nos compétences pour créer une plateforme puissante et
          intuitive, dédiée à l'amélioration des processus de recrutement.
        </p>
      </div>
      <div className="about-section">
        <h3>Engagement pour la Diversité et l'Inclusion</h3>
        <p className="about-text">
          Chez <strong>Nom du Site</strong>, nous croyons fermement que la
          diversité est une richesse. Nous nous engageons à aider les
          entreprises à créer des environnements de travail où chaque individu
          est valorisé et respecté, indépendamment de son origine, de son sexe,
          de son âge ou de toute autre caractéristique personnelle.
        </p>
      </div>
      <div className="about-section contact-us">
        <h3>Contactez-nous</h3>
        <p className="about-text">
          Nous sommes toujours à votre disposition pour discuter de la manière
          dont nous pouvons vous aider à améliorer vos pratiques de recrutement.
          N'hésitez pas à nous contacter pour en savoir plus sur nos services ou
          pour demander une démonstration de notre outil.
        </p>
        <ul className="contact-details">
          <li>Email : contact@nomdusite.com</li>
          <li>Téléphone : +33 1 23 45 67 89</li>
          <li>Adresse : 123 Rue de l'Innovation, 75000 Paris, France</li>
        </ul>
      </div>
      <div className="about-section follow-us">
        <h3>Rejoignez-nous</h3>
        <p className="about-text">
          Suivez-nous sur les réseaux sociaux pour rester informé des dernières
          nouvelles et des mises à jour de notre plateforme.
        </p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
