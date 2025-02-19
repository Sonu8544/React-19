import React, { Suspense, useState, lazy } from "react";
import "./App.css";
import TraficLight from "./components/TraficLight";
import Header from "./components/Header";
import Auth from "./components/Auth";
import ProductData from "./components/ProductData";

// Router
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./react-router/page/Home";
import About from "./react-router/page/About";
import Contact from "./react-router/page/Contact";
import HeaderRouter from "./react-router/page/layout/HeaderRouter";
import Footer from "./react-router/page/layout/Footer";
import AppLayout from "./react-router/page/layout/AppLayout";
import Error from "./react-router/page/layout/Error";
import { getProductdata } from "./react-router/page/layout/GetAPIData";
// import ProductCard from "./react-router/page/layout/ProductCard";

const ProductCard = lazy(() => import("./react-router/page/layout/ProductCard"));

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: getProductdata,
        },
        {
          path: "/product",
          element: <Home />,
          loader: getProductdata,
        },
        {
          path: "/product/:productId",
          element: <Suspense fallback={<div>Loading...</div>}><ProductCard /></Suspense>,
          loader: getProductdata,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
      errorElement: <Error />
    }
  ])

  return <RouterProvider router={router} />


}

export default App;
