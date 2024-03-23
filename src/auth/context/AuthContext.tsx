import { createContext } from "react";
// import {
//   Aplicacion,
//   Modulo,
//   Persona,
//   Rol,
//   RolAcceso,
//   RolAsignacion,
//   User,
// } from "../../interfaces/interfaces";

export interface AppAuthState {
  opcion: number;
  token: string;
  open: boolean;
  logged: boolean;
}

// Props del context
export type AuthContextProps = {
  authState: AppAuthState;
  login: (
    opcion: number,
    open: boolean,
    token: string,
    logged: boolean
  ) => void;
  logout: () => void;
  toggle: (open: boolean) => void;
  setToastMessage: (message: string) => void;
  setOpcion: (opcion: number) => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
