import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      offers: action.payload.offers,
      users: action.payload.users,
    };
  }
  if (action.type === "CATG") {
    return {
      ...state,
      catgValue: action.payload.catgValue,
    };
  }
  if (action.type === "CLEAR_ALERT") {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === "REGISTER_USER_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "REGISTER_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting..",
    };
  }
  if (action.type === "REGISTER_USER_ERROR") {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === "LOGIN_USER_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "LOGIN_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting..",
    };
  }
  if (action.type === "LOGOUT_USER") {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  if (action.type === "LOGIN_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === "GET_CURRENT_USER_BEGIN") {
    return {
      ...state,
      userLoading: true,
      showAlert: false,
    };
  }
  if (action.type === "GET_CURRENT_USER_SUCCESS") {
    return {
      ...state,
      userLoading: false,
      showAlert: true,
      user: action.payload.user,
    };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
