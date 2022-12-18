import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [fetchAgain, setfetchAgain] = useState(false);

  return (
    <ShopContext.Provider
      value={{
        fetchAgain,
        setfetchAgain,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const ShopState = () => {
  return useContext(ShopContext);
};

export default ShopProvider;
