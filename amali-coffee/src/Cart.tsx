import emptycart from "./assets/illustration-empty-cart.svg";
function Cart() {
  return (
    <div className="border-2 border-solid rounded-xl bg-slate-50 h-[350px] mx-4">
      <h1 className="text-orange-600 font-bold px-5 pt-5 text-[25px]">
        Your cart (0)
      </h1>
      <div className="flex items-center justify-center p-8">
        <img src={emptycart} alt="empty cart"></img>
      </div>
      <div>
        <p className="font-semibold text-center py-4">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default Cart;
