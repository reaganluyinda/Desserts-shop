import { useContext } from "react";
import cartimage from "./assets/icon-add-to-cart.svg";
import ShopContext from "./context/ShopContext";

type CardProps = {
  id: number;
  productimage: string;
  product: string;
  productdefn: string;
  price: number;
};
const Card: React.FC<CardProps> = ({
  id,
  productimage,
  product,
  productdefn,
  price,
}) => {
  const { addToCart, removeFromCart, cartItems, inCart } =
    useContext(ShopContext);

  const cartItemQuantity = cartItems[id];

  return (
    <div className="border-1 border-b-gray-600 rounded-lg max-w-64 mr-4 mt-4">
      <div className="flex-col flex items-center justify-center relative">
        <img
          className="rounded-lg h-auto"
          src={productimage}
          alt="waffles"
        ></img>
        {cartItemQuantity === 0 ? (
          <button
            onClick={() => addToCart(id)}
            className=" bg-slate-50 font-semibold border-2 px-4 py-2 rounded-full absolute bottom-0 translate-y-1/2 hover:bg-slate-200 flex gap-2 "
          >
            <img className="" src={cartimage} alt="cart image"></img>
            Add to Cart
          </button>
        ) : (
          <div className="flex justify-center space-x-8 bg-orange-700 border-2 px-2 py-2 rounded-full absolute bottom-0 translate-y-1/2">
            <button
              className="  hover:bg-white text-white hover:text-orange-700 border-2 font-semibold rounded-full px-2 py-0 flex justify-center"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
            <span className=" text-white font-semibold">
              {cartItemQuantity}
            </span>
            <button
              className=" hover:bg-white text-white hover:text-orange-700 border-2 font-semibold  rounded-full px-[6px] py-0"
              onClick={() => addToCart(id)}
            >
              +
            </button>
          </div>
        )}
      </div>
      <div className="py-5">
        <h1>{product}</h1>
        <h1 className="font-semibold">{productdefn}</h1>
        <h1 className="text-red-600">${price}</h1>
      </div>
    </div>
  );
};

export default Card;
