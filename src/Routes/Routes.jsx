import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Authentication from "../Layout/Authentication";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "news",
    element: <h2>news layout</h2>,
  },
  {
    path: "/*",
    element: <h2>error404</h2>,
  },
]);

export default router;
