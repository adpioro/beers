import React from 'react';
import { createRoot } from "react-dom/client"
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './pages/details/Details';
import Home from './pages/home/Home'
import ErrorComponent from "./components/errorComponent/errorComponent"
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorComponent />
  },
  {
    path: "details/:id",
    element: <Details />
  }
])

const rootNode = document.getElementById("root")
const root = createRoot(rootNode);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
