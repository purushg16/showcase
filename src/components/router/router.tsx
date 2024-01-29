import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LayoutPage from "../pages/LayoutPage";
import WorksPage from "../pages/Projects/WorksPage";
import SingleProject from "../pages/Projects/SingleProject";
import LandingPage from "../pages/Landing/LandingPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import BlogsPage from "../pages/Blogs/BlogsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/works/", element: <ProjectsPage /> },
      { path: "/works/:title", element: <SingleProject /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blogs", element: <BlogsPage /> },
    ],
  },
]);

export default router;
