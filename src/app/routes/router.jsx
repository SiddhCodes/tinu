import { createBrowserRouter } from "react-router";
import { HomePage } from "../../features/home/ui/pages/HomePage.jsx";
import { MainLayout } from "../../layouts/MainLayout.jsx";
import { AboutPage } from "../../features/about/ui/pages/AboutPage.jsx";
import { ProjectPage } from "../../features/project/ui/pages/ProjectPage.jsx";
import { BlogPage } from "../../features/blog/ui/pages/BlogPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
    ],
  },
]);
