import React from "react";
import { CircleX } from "lucide-react";

type CardProps = {
  id: number;
  productimage: string;
  product: string;
  productdefn: string;
  price: number;
};
const CartItem: React.FC<CardProps> = ({ productdefn, price }) => {
  return (
    <div className="px-4 flex items-center">
      <div className="border-b-2 p-2 flex-1">
        <p className="font-semibold">{productdefn}</p>
        <p>${price}</p>
      </div>
      <div>
        <CircleX />
      </div>
    </div>
  );
};

export default CartItem;
