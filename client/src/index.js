import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CoursePage from "./pages/Courses/CoursePage";
import StudentSummaryPage from "./pages/students/StudentSummaryPage";
import NotFound from "./pages/Admin/PageNotFound";
import Switch from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Adm from "./pages/Admin/Admin";
import MainPage from "./pages/MainPage";
import StudentDetail from "./pages/students/StudentDetail";
import CourseDetails from "./pages/Courses/courseDetails";
import CourseSummary from "./pages/Courses/CourseSummary";
import { AuthProvider } from "react-auth-kit";
import { RequireAuth } from "react-auth-kit";
import { Routes } from "react-router-dom";
import  Login  from "./pages/Admin/signIn";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coursePage" element={<App />} />
        <Route path="/coursePage/course" element={<CoursePage />} />
        <Route path="/coursePage/course/CourseDetails" element={<CourseDetails />} />
        <Route path="/course/student" element={<StudentSummaryPage />} />
        <Route path="/admin" element={<Adm />} />
        <Route path="/Students" element={<StudentDetail />} />
        <Route path="/coursePage/course/summary" element={<CourseSummary />} />
       {/* <Route path="/CoursePage/course/student" element={<StudentSummaryPage />} />*/}
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
