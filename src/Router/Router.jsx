import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import Login from "../Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
