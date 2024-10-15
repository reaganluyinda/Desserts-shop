import { createContext, useState } from "react";
import { products } from "../product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (CardProps: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  return <ShopContext.Provider>{CardProps.children}</ShopContext.Provider>;
};
