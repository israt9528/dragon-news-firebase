import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Authentication from "../Layout/Authentication";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

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
    path: "newsDetails/:id",
    element: <NewsDetails></NewsDetails>,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>error404</h2>,
  },
]);

export default router;
