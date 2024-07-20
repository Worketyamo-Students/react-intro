import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verification from "./pages/verification";
import Connexion from "./pages/connexion";
import Inscription from "./pages/inscription";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Connexion />,
  },
  {
    path: "/verfication",
    element: <Verification />,
  },

  {
    path: "/inscription",
    element: <Inscription />,
  },

  {
    path: "*",
    element: <Inscription />,
  },
]);

function Client() {
  return <RouterProvider router={router} />;
}

export default Client;
