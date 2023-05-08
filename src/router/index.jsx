import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import SignUpPage from "../Page/Signup/SignUpPage";
import About from "../Page/About/About";
import Login from "../Components/Login/Login";
import Contact from "../Page/Contact/Contact";
import AdminDashBoard from "../Page/AdminDashBoard/AdminDashBoard";
import ListDogs from "../Page/AdminDashBoard/ListDogs/ListDogs";
import ListBooks from "../Page/AdminDashBoard/ListBooks/ListBooks";
import ListVideos from "../Page/AdminDashBoard/ListVideos/ListVideos";
import ListUsers from "../Page/AdminDashBoard/ListUsers/ListUsers";
import ListCategories from "../Page/AdminDashBoard/ListCategories/ListCategories";
import Courses from "../Page/Courses/Courses";
import Root from "../Layouts/root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      { path:'/courses', 
        element:<Courses />

      }, 
      {
        path:'/about',
        element: <About />

      },
      { path: '/signUp',
      element: <SignUpPage />,

      },
      {
        path: '/',
        element: <Home />,
      },
      { 
        path: '/contact',
        element: <Contact />,

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
      {
        path: '/listCategories',
        element: <ListCategories />,
      },
    ],
  },
])

export default router