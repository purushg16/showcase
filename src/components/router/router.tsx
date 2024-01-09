import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/LayoutPage";
import LandingPage from "../pages/Landing/LandingPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
]);

export default router;
