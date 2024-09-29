interface CardProps {
  waffleimage: string;
  product: string;
  productdefn: string;
  price: number;
}
function Card({ waffleimage, product, productdefn, price }: CardProps) {
  return (
    <div className="border-1 border-b-gray-600 rounded-lg max-w-64 mr-4 mt-4">
      <img className="rounded-lg h-auto" src={waffleimage} alt="waffles"></img>
      <div className="py-5">
        <h1>{product}</h1>
        <h1 className="font-semibold">{productdefn}</h1>
        <h1 className="text-red-600">${price}</h1>
      </div>
    </div>
  );
}

export default Card;
