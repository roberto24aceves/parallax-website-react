import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Page404 from "./routes/Page404.jsx";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Page404/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
