// import { useState } from 'react'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import NotFound from "../NotFound";
import QuizCardPage from "./routes/quizcard/QuizCardPage";

function Router() {
  const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/quiz",
    element: <QuizCardPage />,
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
