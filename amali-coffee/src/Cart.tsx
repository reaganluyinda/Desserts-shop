import emptycart from "./assets/illustration-empty-cart.svg";
import { products } from "./product";
import { useContext } from "react";
import ShopContext from "./context/ShopContext";
import CartItem from "./CartItem";
function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="border-2 border-solid rounded-xl bg-slate-50 min-h-[350px] mx-4 pb-4">
      <h1 className="text-orange-600 font-bold px-5 pt-5 text-[25px]">
        Your cart (0)
      </h1>
      {/* <div className="flex items-center justify-center p-8">
        <img src={emptycart} alt="empty cart"></img>
      </div>
      <div>
        <p className="font-semibold text-center py-4">
          Your added items will appear here
        </p>
        </div> */}
      <div>
        {products.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} {...product} />
          ) : null
        )}
      </div>
      <div className="space-y-3">
        <div className="mx-4 py-3">
          <p>Order Total</p>
        </div>
        <div className="bg-green-300 mx-4 text-center p-4 rounded-lg">
          <p>This is a carbon-neutral delivery</p>
        </div>
        <div className="flex justify-center items-center ">
          <button className="bg-orange-700 rounded-full px-4 p-2 text-white font-semibold w-full mx-4">
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
