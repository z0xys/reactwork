import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import InventoryLayout from "./InventoryLayout.jsx";
import RootLayout from "./RootLayout.jsx";
import { useState } from "react";


const isLoggedIn = true;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/login',
    element: isLoggedIn?<Navigate to="/app/dashboard" />:<div>Not logged in</div>,
  },
  {
    path: '/app',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard"/>,
      },
      {
        path: 'dashboard',
        element: <div>DASHBOARD PAGE</div>,
      },
      {
        path: 'inventory',
        element: isLoggedIn?<InventoryLayout />:<div>Not logged in</div>,
        children: [
          // {
          //   index: true,
          // },
          {
            path: 'create',
            element: <div>INVENTORY CREATE PAGE</div>,
          },
          {
            path: 'update/:id',
            element: <div>INVENTORY UPDATE PAGE</div>,
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