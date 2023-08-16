import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
  signed_state: boolean;
  children: React.ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ signed_state, children }) => {
  if (!signed_state) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default Protected;
