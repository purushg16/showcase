import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LayoutPage from "../pages/LayoutPage";
import WorksPage from "../pages/Projects/WorksPage";
import SingleProject from "../pages/Projects/SingleProject";
import LandingPage from "../pages/Landing/LandingPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import SingleWork from "../pages/Projects/SingleWork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/works", element: <WorksPage /> },
      { path: "/works/:type", element: <SingleWork /> },
      { path: "/works/:type/:title", element: <SingleProject /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default router;
