import React from "react";
import { ShopContextType } from "./shop-context";

const ShopContext = React.createContext<ShopContextType | null>(null);

export default ShopContext;
