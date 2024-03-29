import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LayoutPage from "../pages/LayoutPage";
import WorksPage from "../pages/Projects/WorksPage";
import SingleWork from "../pages/Projects/SingleWork";
import LandingPage from "../pages/Landing/LandingPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import BlogsPage from "../pages/Blogs/BlogsPage";
import ConnectPage from "../pages/Connect/ConnectPage";
import SingleBlogPage from "../pages/Blogs/SingleBlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/works", element: <WorksPage /> },
      { path: "/works/:title", element: <SingleWork /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/blogs/:id", element: <SingleBlogPage /> },
      { path: "/connect", element: <ConnectPage /> },
    ],
  },
]);

export default router;
