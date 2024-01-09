import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/LayoutPage";
import LandingPage from "../pages/Landing/LandingPage";
import Projects from "../pages/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

export default router;
