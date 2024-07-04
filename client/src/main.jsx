import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import EmployeurForm from "./pages/EmployeurForm/EmployeurForm";
import CandidatFormulaire from "./pages/CandidatFormulaire/CandidatFormulaire";
import ProfilsRetour from "./components/Profils/Profils";
import Accueil from "./components/Accueil"

import EmployeurConnexion from "./pages/EmployeurConnexion/EmployeurConnexion";
import App from "./App";
import Inscription from "./components/Formulaires/Inscription";



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil/>,
      },
      {
        path: "/candidat",
        element: <Inscription/>,
      },
      {
        path: "/employeur",
        element: <>employeur</>,
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

        path: "/EmployeurConnexion",
        element: <EmployeurConnexion />,
      },
      {
        path: "/connexion",
        element: <>connexion</>,

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
