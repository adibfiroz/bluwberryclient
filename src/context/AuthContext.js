import { createContext, useEffect, useReducer } from "react";

const INITAIL_STATE = {
  user: JSON.parse(localStorage.getItem("user") || null),
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITAIL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "UPDATE_START":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITAIL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
