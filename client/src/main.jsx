import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import EmployeurForm from "./pages/EmployeurForm/EmployeurForm";
import CandidatFormulaire from "./pages/CandidatFormulaire/CandidatFormulaire";

import ProfilsRetour from "./components/Profils/Profils";
import Accueil from "./components/Accueil"


import App from "./App";
import Inscription from "./components/Formulaires/Inscription";
import RecapCv from "./components/RecapCv"
import InscriptionEm from "./components/Formulaires/InscriptionEm";
import ConnexionEmployeur from "./components/Connexion/ConnexionEmployer";
import ConnexionCandidat from "./components/Connexion/ConnexionCandidat";


import ProfilsRetour from "./pages/ProfilsRetour/ProfilsRetour";
import Accueil from "./components/Accueil";
import EmployeurConnexion from "./pages/EmployeurConnexion/EmployeurConnexion";
import App from "./App";
import Inscription from "./components/Formulaires/Inscription";
import RecapCv from "./components/RecapCv";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/inscription-candidat",
        element: <Inscription/>,
      },
      {
        path: "/employeur",
        element: <>employeur</>,
      },
      {
        path: "/recapitulatif",
        element: <RecapCv />,
      },
      {
        path: "/AboutPage",
        element: <AboutPage />,
      },
      {
        path: "/EmployeurForm",
        element: <EmployeurForm />,
      },
      {
        path: "/CandidatFormulaire",
        element: <CandidatFormulaire />,
      },
      {
        path: "/ProfilsRetour",
        element: <ProfilsRetour />,
      },
      {


        path: "/login-candidat",
        element: <ConnexionCandidat/>,
      },
      {

        path: "/login-employer",
        element: <ConnexionEmployeur/>,

      },
      {
        path: "/connexion",
        element: <>connexion</>,


      },{

        path: "/inscription-employeur",
        element: <InscriptionEm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
