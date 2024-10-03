import Card from "./Card";
import { products } from "./product";
function Shop() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {products.map((product) => (
        <Card
          key={product.id}
          productimage={product.productimage}
          product={product.product}
          productdefn={product.productdefn}
          price={product.price}
          id={1}
        />
      ))}
    </div>
  );
}

export default Shop;
