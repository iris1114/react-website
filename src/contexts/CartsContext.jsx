import React, { createContext, useState } from "react";

const CartsContext = createContext({
  cartsData: [],
  setCartsData: null,
});

export const CartsProvider = ({ children }) => {
  const [cartsContextData, setCartsContextData] = useState([]);
  return (
    <CartsContext.Provider
      value={{ cartsData: cartsContextData, setCartsData: setCartsContextData }}
    >
      {children}
    </CartsContext.Provider>
  );
};

export default CartsContext;
