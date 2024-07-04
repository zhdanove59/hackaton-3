import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import EmployeurForm from "./pages/EmployeurForm/EmployeurForm";
import CandidatFormulaire from "./pages/CandidatFormulaire/CandidatFormulaire";
import ProfilsRetour from "./components/Profils/Profils";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
