import react from "react";
import { useLocation, useNavigate, createBrowserRouter, RouterProvider, Route,Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CoursePage() {
    const location = useLocation();

    return <div>{location.state.name}</div>;
}