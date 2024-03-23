import { AppAuthState } from ".";

type AuthAction =
  | {
      type: "[AUTH] login";
      payload: {
        opcion: number;
        open: boolean;
        token: string;
        logged: boolean;
      };
    }
  | { type: "[AUTH] logout" }
  | {
      type: "[AUTH] setToastMessage";
      payload: {
        message: string;
      };
    }
  | {
      type: "[AUTH] toggle";
      payload: {
        open: boolean;
      };
    }
  | {
      type: "[AUTH] setOpcion";
      payload: {
        opcion: number;
      };
    };

export const authReducer = (state: AppAuthState, action: AuthAction) => {
  switch (action.type) {
    case "[AUTH] login":
      return {
        ...state, // Todo lo que contenia el state anteriormente
        opcion: action.payload.opcion,

        open: false,
        token: action.payload.token,
        logged: true,
      };

    case "[AUTH] logout":
      return {
        ...state, // Todo lo que contenia el state anteriormente
        open: false,
        token: "",
        logged: false,
      };

    case "[AUTH] toggle":
      return {
        ...state,
        open: action.payload.open,
      };
    case "[AUTH] setToastMessage":
      return {
        ...state,
        message: action.payload.message,
      };
    case "[AUTH] setOpcion":
      return {
        ...state,
        opcion: action.payload.opcion,
      };
    default:
      return state;
  }
};
