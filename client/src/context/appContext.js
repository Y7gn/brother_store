import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

const initialState = {
  userLoading: true,
  paymentType: "",
  users: [],
  offers: [],
  totalPrice: 0,
  catgValue: "fruit",
  // user: null,
  cart: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });
  //   authFetch.interceptors.response.use(
  //     (response) => {
  //       return response;
  //     },
  //     (error) => {
  //       //   console.log(error.response);
  //       if (error.response.status === 401) {
  //         logoutUser();
  //         // console.log();
  //       }
  //       return Promise.reject(error);
  //     }
  //   );

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/");
      //   console.log(data);
      const { users, offers } = data;
      dispatch({
        type: "GET_PRODUCTS",
        payload: {
          users,
          offers,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleChangeCatg = ({ catgValue }) => {
  //     dispatch({
  //       type: "CATG",
  //       payload: {
  //         catgValue,
  //       },
  //     });
  //   };
  //   const registerUser = async (currentUser) => {
  //     dispatch({ type: "REGISTER_USER_BEGIN" });
  //     try {
  //       const response = await axios.post("/api/v1/auth/register", currentUser);
  //       const { user } = response.data;
  //       dispatch({ type: "REGISTER_USER_SUCCESS", payload: { user } });
  //     } catch (error) {
  //       dispatch({
  //         type: "REGISTER_USER_ERROR",
  //         payload: { msg: error.response.data.msg },
  //       });
  //     }
  //     clearAlert();
  //   };

  //   const loginUser = async (currentUser) => {
  //     dispatch({ type: "LOGIN_USER_BEGIN" });
  //     try {
  //       const { data } = await axios.post("/api/v1/auth/login", currentUser);
  //       // console.log(response);

  //       //add token line 163 and 164
  //       const { user } = data;
  //       dispatch({ type: "LOGIN_USER_SUCCESS", payload: { user } });
  //       // addUserToLocalStorage({user,token,location})
  //     } catch (error) {
  //       //local storage later
  //       // console.log(error.response);
  //       dispatch({
  //         type: "LOGIN_USER_ERROR",
  //         payload: { msg: error.response.data.msg },
  //       });
  //     }
  //     clearAlert();
  //   };
  //   const clearAlert = () => {
  //     setTimeout(() => {
  //       dispatch({ type: "CLEAR_ALERT" });
  //     }, 3000);
  //   };

  //   const logoutUser = async () => {
  //     await axios.get("/api/v1/auth/logout");
  //     dispatch({ type: "LOGOUT_USER" });
  //     // removeUserFromLocalStorage()
  //   };

  //   const getCurrentUser = async () => {
  //     dispatch({ type: "GET_CURRENT_USER_BEGIN" });
  //     try {
  //       const { data } = await authFetch("/auth/getCurrentUser");
  //       const { user, location } = data;
  //       dispatch({
  //         type: "GET_CURRENT_USER_SUCCESS",
  //         payload: { user, location },
  //       });
  //     } catch (error) {
  //       if (error.response.status === 401) return;
  //       logoutUser();
  //     }
  //   };
  const handleClick = ({ _id, name, price }) => {
    dispatch({ type: "HANDLE_CLICK", payload: { _id, name, price } });
  };
  const addProduct = ({ _id, name, price, description }) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { _id, name, price, description },
    });
  };
  const removeProduct = ({ _id, name, price, description }) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: { _id, name, price, description },
    });
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };
  useEffect(() => {
    getProducts();
  }, []);
  //   useEffect(() => {
  //     getCurrentUser();
  //   }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getProducts,
        handleClick,
        addProduct,
        removeProduct,
        handleChange,
        // handleChangeCatg,
        // registerUser,
        // loginUser,
        // logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
