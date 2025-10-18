import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Home from "../Pages/Home";

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
    element: <h2>authentication layout</h2>,
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
