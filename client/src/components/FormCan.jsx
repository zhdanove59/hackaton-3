import { useState } from "react";
import "./FormCan.css";
import { Link } from "react-router-dom";

function FormCan() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    poste: "",
    ville: "",
    cv: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission, e.g., send the data to the server

    setSubmitted(true);
    // Reset form fields
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      poste: "",
      ville: "",
      cv: null,
    });
    // Hide confirmation message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="body-form">
      <div className="container-formcar">
        <button className="profil-candidat" type="button">
          .
        </button>
        <div className="iconhome-candidat">
          <Link to="/">
            <img
              className="home-icon"
              src="../../src/assets/images/home.svg"
              alt="home icon"
            />
          </Link>
        </div>

        <div className="form-container">
          <h2>Candidat</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom :</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom :</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="poste">Poste recherché :</label>
              <input
                type="text"
                id="poste"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ville">Ville :</label>
              <input
                type="text"
                id="ville"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cv">Télécharger CV :</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit" className="button-submit-formcan">
              Envoyer
            </button>
          </form>
          {submitted && (
            <p className="confirmation-message">
              Votre formulaire a été envoyé avec succès!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormCan;
