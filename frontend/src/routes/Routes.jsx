import EmailSequence from "@pages/EmailSequence";
import EmailSequenceDetail from "@pages/EmailSequenceDetail";
import Login from "@pages/Login";
import Register from "@pages/Register";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Routes = () => {
  // defining routes
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/emailsequences",
      element: <EmailSequence />,
    },
    {
      path: "/emailsequences/:emailSequenceId",
      element: <EmailSequenceDetail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
