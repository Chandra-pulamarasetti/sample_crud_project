import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

interface ChildProps {
  children: JSX.Element;
}

const RequiredAuth = ({ children }: ChildProps) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequiredAuth;
