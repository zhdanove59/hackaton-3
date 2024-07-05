import { useState } from "react";
import "./InscriptionEm.css";
import { Link } from "react-router-dom";

function InscriptionEm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission, e.g., send the data to the server

    setSubmitted(true);
    // Reset form fields
    setFormData({
      nom: "",
      email: "",
      poste: "",
      termsAccepted: "",
    });
    // Hide confirmation message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="body-form">
      <div className="container-formcar">
        <div className="iconhome">
          <Link to="/">
            <img
              className="home-icon"
              src="../../src/assets/images/home.svg"
              alt="home icon"
            />
          </Link>
        </div>

        <div className="form-container1">
          <h2 className="label-inscription ins"> Inscrivez-vous en un clic!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom" className="label-inscription">
                Nom de l'entreprise{" "}
              </label>
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
              <label htmlFor="email" className="label-inscription">
                Adresse email{" "}
              </label>
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
              <label htmlFor="poste" className="label-inscription">
                Mot de passe{" "}
              </label>
              <input
                type="password"
                id="poste"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label-inscription lu">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                J’ai lu et j’accepte le CGU et la politique de protection des
                données
              </label>
            </div>
            <button type="submit" className="btn-primary">
              S'inscrire
            </button>
          </form>
          {submitted && (
            <p className="confirmation-message">Inscription réussi !</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InscriptionEm;
