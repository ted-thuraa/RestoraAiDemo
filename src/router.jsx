import { createBrowserRouter, Navigate } from "react-router-dom";
import Landing from "./views/landing";
import Login from "./views/login";
import Signup from "./views/signup";
import NotFound from "./views/notfound";
import Restore from "./views/restore";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/index" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/index" />,
  },

  {
    path: "/index",
    element: <Landing />,
  },
  {
    path: "/restore",
    element: <Restore />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
