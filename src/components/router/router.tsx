import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LayoutPage from "../pages/LayoutPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import SingleTypeProjects from "../pages/Projects/SingleTypeProjects";
import Lander from "../pages/Landing/Lander";
import AboutPage from "../pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Lander /> },
      { path: "/works", element: <ProjectsPage /> },
      { path: "/works/:projectType", element: <SingleTypeProjects /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default router;
