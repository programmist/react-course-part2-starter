import { Dispatch, createContext } from "react";
import { AuthAction } from "./authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const authContext = createContext({} as AuthContextType);

export default authContext;
