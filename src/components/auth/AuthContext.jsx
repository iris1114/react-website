import React, { createContext, useState } from "react";

const AuthContext = createContext({
  authData: {
    // access_token: null,
    // num_cards: null,
    // num_orders: null,
    // num_carts: null,
  },
  setAuthData: null,
});

export const AuthProvider = ({ children }) => {
  const [authContextData, setAuthContextData] = useState({});
  return (
    <AuthContext.Provider
      value={{ authData: authContextData, setAuthData: setAuthContextData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
