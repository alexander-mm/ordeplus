import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from "./pages/root";
import './index.css'
import Home from './pages/Home'
import Machines from './pages/Machines'
import Engines from './pages/Engines'
import VacuumPumps from './pages/VacuumPumps';
import Products from './pages/Products'
import Supplies from './pages/Supplies'
import Contact from './pages/Contact'
import StorePerPage from './pages/StorePerPage';
import OptionsM1 from './pages/OptionsM1';
import OptionsM2 from './pages/OptionsM2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/machines',
        element: <Machines />
      },
      {
        path: '/engines',
        element: <Engines />
      },
      {
        path: '/pumps',
        element: <VacuumPumps />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/supplies',
        element: <Supplies />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/pagination',
        element: <StorePerPage />
      },
      {
        path: 'options-M1',
        element: <OptionsM1 />
      },
      {
        path: 'options-M2',
        element: <OptionsM2 />
      },
    ],
  },
  // {
  //   path: '/espumaone',
  //   element: <EspumaOne />
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
