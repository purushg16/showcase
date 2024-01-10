import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/LayoutPage";
import LandingPage from "../pages/Landing/LandingPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import SingleTypeProjects from "../pages/Projects/SingleTypeProjects";
import Lander from "../pages/Lander";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Lander /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/projects/:projectType", element: <SingleTypeProjects /> },
    ],
  },
]);

export default router;
