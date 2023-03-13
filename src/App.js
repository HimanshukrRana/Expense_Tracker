import React from "react";
// import { Content } from "./components/Content";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

// import SignIn from "./components/SignIn";

// import { Navbar } from "./components/Navbar";
import Blog from "./pages/Blog";

// import { createBrowserRouter } from "react-router-dom";

/** import all components */
import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

// const router = createBrowserRouter([
//   {
//     path: "/SignIn",
//     element: <Username></Username>,
//   },
//   {
//     path: "/register",
//     element: <Register></Register>,
//   },
//   {
//     path: "/password",
//     element: (
//       <ProtectRoute>
//         <Password />
//       </ProtectRoute>
//     ),
//   },
//   {
//     path: "/profile",
//     element: (
//       <AuthorizeUser>
//         <Profile />
//       </AuthorizeUser>
//     ),
//   },
//   {
//     path: "/recovery",
//     element: <Recovery></Recovery>,
//   },
//   {
//     path: "/reset",
//     element: <Reset></Reset>,
//   },
//   {
//     path: "*",
//     element: <PageNotFound></PageNotFound>,
//   },
// ]);

export default function App() {
  return (
    // {/* <Navbar /> */}
    // {/* <Contact /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />

      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blog" element={<Blog />} />
      {/* <Route router={router}></Route> */}

      <Route path="/SignIn" element={<Username />} />

      <Route path="/register" element={<Register />} />
      <Route
        path="/password"
        element={
          <ProtectRoute>
            <Password />
          </ProtectRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthorizeUser>
            <Profile />
          </AuthorizeUser>
        }
      />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    // {/* <RouterProvider router={router}></RouterProvider> */}
  );
}

