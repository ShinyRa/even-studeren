// import { useState } from 'react'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import NotFound from "../NotFound";

function Router() {
  const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },

  // 404 page
  {
    path: "*",
    element: <NotFound />,
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default Router
