import ConfirmedItem from "./Confirmed-Item";
import { useShopContext } from "./context/shop-context";
import { products } from "./product";
import orderconfirmed from "./assets/icon-order-confirmed.svg";
import clsx from "clsx";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  const { cartItems, getTotalCartAmount } = useShopContext();

  const totalAmount = getTotalCartAmount();

  return (
    <div
      onClick={onClose}
      className={clsx("fixed inset-0 flex justify-center items-center", {
        "bg-black/40": open,
      })}
    >
      <div className="bg-white rounded-xl shadow p-6">
        <div className="py-2">
          <img src={orderconfirmed} alt="order-confirmed image"></img>
        </div>
        <h1 className="font-bold text-2xl">Order Confrimed</h1>
        <p className="text-xs">We hope you enjoy your food</p>
        <div className="py-3">
          {products.map((product) =>
            cartItems[product.id] !== 0 ? (
              <ConfirmedItem
                key={product.id}
                {...product}
                quantity={cartItems[product.id]}
              />
            ) : null
          )}
        </div>
        <div className=" py-3 flex items-center">
          <p className="flex-1">Order Total</p>
          <p className="font-bold text-xl">${totalAmount.toFixed(2)}</p>
        </div>
        <div className="flex justify-center items-center pt-2">
          <button className="bg-orange-800 rounded-full  p-2 text-white font-semibold w-full ">
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
