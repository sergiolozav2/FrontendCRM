import { useReducer } from "react";
import { AppAuthState, AuthContext } from "./AuthContext";
import { authReducer } from "../../auth";

import { StorageKeys } from "../../models/enums";

// Forma del State -> auth context
// const initialState: AppAuthState = {
//   accesos: null,
//   aplicacion: null,
//   modulos: [],
//   rol: null,
//   token: "",
//   user: null,
//   persona: null,
// };

interface Props {
  children: JSX.Element | JSX.Element[];
}

// Funcion que inicializa el state
const init = () => {
  const opcion = JSON.parse(localStorage.getItem(StorageKeys.OPCION) || "0");
  const aplicacion = JSON.parse(
    localStorage.getItem(StorageKeys.APLICACION) || "{}"
  );
  const storageToken = localStorage.getItem(StorageKeys.USER_TOKEN);
  const logged = JSON.parse(
    localStorage.getItem(StorageKeys.LOGGED) || "false"
  );
  const token = storageToken ? storageToken : "";
  const open = false;
  const message = "";
  return {
    opcion,
    open,
    token,
    logged,
    message,
  };
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(
    authReducer,
    {} as AppAuthState,
    init
  );

  // type AuthContextProps -> auth context
  const login = (
    opcion: number,
    open: boolean,
    token: string,
    logged: boolean
  ) => {
    dispatch({
      type: "[AUTH] login",
      payload: {
        opcion,
        open,
        token,
        logged,
      },
    });
  };

  const setToastMessage = (message: string) => {
    dispatch({
      type: "[AUTH] setToastMessage",
      payload: {
        message,
      },
    });
  };

  const toggle = (open: boolean) => {
    dispatch({
      type: "[AUTH] toggle",
      payload: {
        open,
      },
    });
  };
  // type AuthContextProps -> auth context
  const logout = () => {
    dispatch({ type: "[AUTH] logout" });
  };
  const setOpcion = (opcion: number) => {
    dispatch({
      type: "[AUTH] setOpcion",
      payload: {
        opcion,
      },
    });
  };
  return (
    <AuthContext.Provider
      value={{ authState, login, logout, toggle, setToastMessage, setOpcion }}
    >
      {children}
    </AuthContext.Provider>
  );
};
