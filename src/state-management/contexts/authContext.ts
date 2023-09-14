import { Dispatch, createContext } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const authContext = createContext({} as AuthContextType);

export default authContext;
