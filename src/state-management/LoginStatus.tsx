import { useContext } from "react";
import authContext from "./contexts/authContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(authContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", user: "tony.childs" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
