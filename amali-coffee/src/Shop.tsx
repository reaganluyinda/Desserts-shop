import Card from "./Card";
import waffleimage from "./assets/image-waffle-desktop.jpg";
import cremebrulee from "./assets/image-creme-brulee-desktop.jpg";
import macaron from "./assets/image-macaron-desktop.jpg";
import tiramisu from "./assets/image-tiramisu-desktop.jpg";
import baklva from "./assets/image-baklava-desktop.jpg";
import pie from "./assets/image-meringue-desktop.jpg";
function Shop() {
  return (
    <div className="grid grid-cols-3">
      <Card
        waffleimage={waffleimage}
        product="Waffle"
        productdefn="Waffle with berries"
        price={6.5}
      />
      <Card
        waffleimage={cremebrulee}
        product="Creme brulee"
        productdefn="Vanilla Bean Creme Brulee"
        price={7.2}
      />
      <Card
        waffleimage={macaron}
        product="Macaron"
        productdefn="Macaron Mix of Five"
        price={8.3}
      />
      <Card
        waffleimage={tiramisu}
        product="Tiramisu"
        productdefn="Classic Tiramisu"
        price={5.5}
      />
      <Card
        waffleimage={baklva}
        product="Baklva"
        productdefn="Pistachio Baklva"
        price={4.2}
      />
      <Card
        waffleimage={pie}
        product="Pie"
        productdefn="Lemon Meringue Pie"
        price={5.1}
      />
    </div>
  );
}

export default Shop;
