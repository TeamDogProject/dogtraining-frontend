import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from "../Layouts/root";
import Login from "../Components/Login/Login";
import AdminDashBoard from "../Page/AdminDashBoard/AdminDashBoard";
import ListDogs from "../Page/AdminDashBoard/ListDogs/ListDogs";
import ListBooks from "../Page/AdminDashBoard/ListBooks/ListBooks";
import ListVideos from "../Page/AdminDashBoard/ListVideos/ListVideos";
import ListUsers from "../Page/AdminDashBoard/ListUsers/ListUsers";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/adminDashBoard',
        element: <AdminDashBoard />,
      },
      {
        path: '/listDogs',
        element: <ListDogs />,
      },
      {
        path: '/listBooks',
        element: <ListBooks />,
      },
      {
        path: '/listVideos',
        element: <ListVideos />,
      },
      {
        path: '/listUsers',
        element: <ListUsers />,
      },
    ],
  },
])

export default router