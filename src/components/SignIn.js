import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import all components */
import Username from "./Username";
import Password from "./Password";
import Register from "./Register";
import Profile from "./Profile";
import Recovery from "./Recovery";
import Reset from "./Reset";
import PageNotFound from "./PageNotFound";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "../middleware/auth";
// import { Navbar } from "./components/Navbar";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default function SignIn() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
