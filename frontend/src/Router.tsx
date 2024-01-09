import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "src/pages/Main";
import { PageUrls } from "src/data/constant";
import Layout from "src/components/Layout";

const router = createBrowserRouter([
  {
    path: PageUrls.Main,
    element: <Layout />,
    children: [
      {
        path: PageUrls.Main,
        element: <Main />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
