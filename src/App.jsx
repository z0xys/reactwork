import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import ProjectView from "./ProjectLayout.jsx";
import RootLayout from "./RootLayout.jsx";
import { useState } from "react";
import Projects from "./Projects.jsx";
import ProjectForm from "./ProjectForm.jsx";


const isLoggedIn = true;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: isLoggedIn ? <Navigate to="/app/dashboard" /> : <div>Not logged in</div>,
  },
  {
    path: '/app',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <div>DASHBOARD PAGE</div>,
      },
      {
        path: 'project',
        element: isLoggedIn ? <ProjectView /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <Projects />,
          },
          {
            path: 'create',
            element: <ProjectForm />,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },
    ],
  },

]);

function App() {

  return <RouterProvider router={router} />
}

export default App;