import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  // pass true to get a null user (simulate not-logged-in scenario)
  const { user } = useAuth();

  if (!user) {
    // redirect to login page
    // Don't use useNavigate()

    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
