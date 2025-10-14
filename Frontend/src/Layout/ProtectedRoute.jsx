import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(storedUser);

  if (user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
