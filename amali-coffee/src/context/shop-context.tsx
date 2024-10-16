import { useState } from "react";
import { products } from "../product";
import ShopContext from "./ShopContext";

export type ShopContextType = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [inCart, setInCart] = useState<boolean>(false);

  const addToCart = (id: number) => {
    setCartItems((prev: number[]) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev: number[]) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 0),
    }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart, inCart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
