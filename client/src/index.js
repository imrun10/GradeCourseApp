import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CoursePage from "./pages/CoursePage";
import StudentSummaryPage from "./pages/StudentSummaryPage";
import NotFound from "./pages/PageNotFound";
import Switch from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Adm from "./pages/Admin";
import MainPage from "./pages/MainPage";
import StudentDetail from "./pages/StudentDetail";
import CourseDetails from "./pages/courseDetails";
import CourseSummary from "./pages/CourseSummary";
import { AuthProvider } from "react-auth-kit";
import { RequireAuth } from "react-auth-kit";
import { Routes } from "react-router-dom";
import  Login  from "./pages/signIn";
import SignUp from "./pages/signUp";

/*const router = createBrowserRouter([
  {
    path: "coursePage",
    element: <App />,
  },
  {
    path: "/",
    element: (
      <RequireAuth loginPath="/login">
        <MainPage />
      </RequireAuth>
    ),
  },
  {
    path: "Students",
    element: <StudentDetail />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    //make the path url dynamic
    path: `/CoursePage/course`,
    element: <CoursePage />,
  },

  {
    path: `/CoursePage/course/courseDetails`,
    element: <CourseDetails />,
  },
  {
    path: "/CoursePage/course/student",
    element: <StudentSummaryPage />,
  },
  {
    path: "/CoursePage/course/summary",
    element: <CourseSummary/>,
  },
  {
    path: "app/admin",
    element: <Adm />,},
  {
    path: "*",
    element: <NotFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/coursePage" element={<App />} />
        <Route path="/coursePage/course" element={<CoursePage />} />
        <Route path="/coursePage/course/CourseDetails" element={<CourseDetails />} />
        <Route path="/course/student" element={<StudentSummaryPage />} />
        <Route path="/admin" element={<Adm />} />
        <Route path="/Students" element={<StudentDetail />} />
        <Route path="/course/student" element={<StudentSummaryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
