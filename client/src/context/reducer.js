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
  if (action.type === "HANDLE_CLICK") {
    const { _id, price, name } = action.payload;
    console.log(_id);
    const isIdInCart = state.cart.hasOwnProperty(_id);
    let updatedCart;
    if (isIdInCart) {
      updatedCart = { ...state.cart };
      state.totalPrice -= price;
      delete updatedCart[_id];
    } else {
      updatedCart = {
        ...state.cart,
        [_id]: { _id, name, price, status: true },
      };
    }
    return {
      ...state,
      cart: updatedCart,
      totalPrice: state.totalPrice + price,
    };
  }

  if (action.type === "ADD_PRODUCT") {
    const { _id, price, name, description } = action.payload;
    let updatedTotalPrice;

    const isIdInCart = state.cart.hasOwnProperty(_id);
    let updatedCart;

    if (isIdInCart) {
      console.log("item is already in the cart");
      updatedCart = {
        ...state.cart,
        [_id]: {
          ...state.cart[_id],
          qty: state.cart[_id].qty + 1,
        },
      };
    } else {
      console.log("item not in cart");
      updatedCart = {
        ...state.cart,
        [_id]: { _id, name, price, status: true, qty: 1, description },
      };
    }
    updatedTotalPrice = state.totalPrice + price;

    return {
      ...state,
      cart: updatedCart,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE_PRODUCT") {
    const { _id, price } = action.payload;
    const isIdInCart = state.cart && state.cart.hasOwnProperty(_id); // Check if state.cart is defined
    let updatedCart = { ...state.cart };
    let updatedTotalPrice = state.totalPrice;

    if (isIdInCart) {
      if (updatedCart[_id].qty === 1) {
        // If the quantity becomes zero, remove the product from the cart
        delete updatedCart[_id];
      } else {
        updatedCart[_id].qty -= 1;
      }

      updatedTotalPrice -= price;
    }

    return {
      ...state,
      cart: updatedCart,
      totalPrice: updatedTotalPrice,
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
  if (action.type === "HANDLE_CHANGE") {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
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
