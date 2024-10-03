import cartimage from "./assets/icon-add-to-cart.svg";
interface CardProps {
  id: number;
  productimage: string;
  product: string;
  productdefn: string;
  price: number;
}
function Card({ id, productimage, product, productdefn, price }: CardProps) {
  return (
    <div className="border-1 border-b-gray-600 rounded-lg max-w-64 mr-4 mt-4">
      <div className="flex-col flex items-center justify-center relative">
        <img
          className="rounded-lg h-auto"
          src={productimage}
          alt="waffles"
        ></img>
        <button className=" bg-slate-50 font-semibold border-2 px-4 py-2 rounded-full absolute bottom-0 translate-y-1/2 hover:bg-slate-200 flex gap-2 ">
          <img className="" src={cartimage} alt="cart image"></img>
          Add to Cart
        </button>
      </div>
      <div className="py-5">
        <h1>{product}</h1>
        <h1 className="font-semibold">{productdefn}</h1>
        <h1 className="text-red-600">${price}</h1>
      </div>
    </div>
  );
}

export default Card;
