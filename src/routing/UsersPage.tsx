import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";
import LoginPage from "./LoginPage";

const UsersPage = () => {
  const { user } = useAuth(true);

  if (!user) {
    // redirect to login page
    // Don't use useNavigate()

    return <Navigate to="/login" />;
  }

  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
