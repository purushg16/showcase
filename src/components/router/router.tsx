import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/LayoutPage";
import LandingPage from "../pages/Landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      //   { path: "/games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
