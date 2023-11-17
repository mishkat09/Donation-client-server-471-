import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/Error/Error";
import LogIn from "./Components/Login/LogIn";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Components/Auth Provider/AuthProvider";
import PrivateRoute from "./Components/Private Route/PrivateRoute";
import ResetPassword from "./Components/Reset Password/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<PrivateRoute> <Home></Home></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/forgotpassword",
        element: <ResetPassword></ResetPassword>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
