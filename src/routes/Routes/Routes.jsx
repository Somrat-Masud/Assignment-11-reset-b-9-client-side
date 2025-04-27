import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "../MainRoutes/MainRoutes";
import Home from "../../pages/Home/Home";
import Footer from "../../pages/Footer/Footer";
import SignIn from "../../pages/SignIn";
import Register from "../../pages/Register";
import AllVolunteer from "../../pages/AllVolunteer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVolunteer",
        element: <AllVolunteer></AllVolunteer>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
export default router;
