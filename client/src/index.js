import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./pages/signIn";
import CoursePage from "./pages/CoursePage";
import StudentSummaryPage from "./pages/StudentSummaryPage";
import NotFound from "./pages/PageNotFound";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />,
  },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/app/course",
    element: <CoursePage />,
  },
  {
    path: "app/course/student",
    element: <StudentSummaryPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
