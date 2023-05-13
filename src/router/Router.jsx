import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import AllTurf from "../pages/AllTurf";
import Home from "../pages/Home";
import TurfDetails from "../pages/TurfDetails";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-turf",
          element: <AllTurf />,
        },
        {
          path: "/turf-details/:id",
          element: <TurfDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
