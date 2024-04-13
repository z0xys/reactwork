import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import MainLayout from "./MainLayout.jsx";
import RootLayout from "./RootLayout.jsx";
import { useState } from "react";
import Projects from "./table-views/Projects.jsx";
import ProjectForm from "./CreateForms/ProjectForm.jsx";
import StoreForm from "./CreateForms/StoreForm.jsx";
import SiteForm from "./CreateForms/SiteForm.jsx";
import DivisionForm from "./CreateForms/DivisionForm.jsx";
import SubDivisionForm from "./CreateForms/SubDivisionForm.jsx";
import SubStationForm from "./CreateForms/SubStationForm.jsx";
import BOQMasterForm from "./CreateForms/BOQMasterForm.jsx";
import SupplierForm from "./CreateForms/SupplierForm.jsx";
import SubContractorForm from "./CreateForms/SubContratorForm.jsx";
import Sites from "./table-views/Sites.jsx";
import Stores from "./table-views/Stores.jsx";
import BOQMasters from "./table-views/BOQMasters.jsx";
import Suppliers from "./table-views/Suppliers.jsx";
import SubContractors from "./table-views/SubContractors.jsx";
import Divisions from "./table-views/Divisions.jsx";
import DivisionRender from "./CreateForms/DivisionRender.jsx";


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
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
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

      {
        path: 'store',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <Stores />,
          },
          {
            path: 'create',
            element: <StoreForm />,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'sitelocation',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <Sites />,
          },
          {
            path: 'create',
            element: <SiteForm />,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'division',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <Divisions />,
          },
          {
            path: 'create',
            element: <DivisionRender />,
          },
          {
            path: 'update/:id',
            element: <div>DIVISION ETC UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'paymentmode',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <></>,
          },
          {
            path: 'create',
            element: <></>,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'materialcategory',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <></>,
          },
          {
            path: 'create',
            element: <></>,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'boqmaster',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <BOQMasters />,
          },
          {
            path: 'create',
            element: <BOQMasterForm />,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'supplier',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <Suppliers />,
          },
          {
            path: 'create',
            element: <SupplierForm />,
          },
          {
            path: 'update/:id',
            element: <div>PROJECT UPDATE PAGE</div>,
          },
        ],
      },

      {
        path: 'subcontractor',
        element: isLoggedIn ? <MainLayout /> : <div>Not logged in</div>,
        children: [
          // {
          //   index: false,
          // },
          {
            path: 'view',
            element: <SubContractors />,
          },
          {
            path: 'create',
            element: <SubContractorForm />,
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