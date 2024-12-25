// Global
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Style
import "./index.css";

// Routes
import Root from "./Root.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Students from "./routes/Students.jsx";
import Courses from "./routes/Courses.jsx";
import Reports from "./routes/Reports.jsx";
import Exams from "./routes/Exams.jsx";
import Settings from "./routes/Settings.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStudent from "./routes/AddStudent.jsx";

const baseUrl = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard baseUrl={baseUrl} /> },
      { path: "dashboard", element: <Dashboard baseUrl={baseUrl} /> },
      { path: "students", element: <Students baseUrl={baseUrl} /> },
      { path: "addnewstudent", element: <AddStudent baseUrl={baseUrl} /> },
      { path: "courses", element: <Courses baseUrl={baseUrl} /> },
      { path: "reports", element: <Reports /> },
      { path: "exams", element: <Exams /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);