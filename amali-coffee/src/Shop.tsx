import Card from "./Card";
import waffleimage from "./assets/image-waffle-desktop.jpg";
import cremebrulee from "./assets/image-creme-brulee-desktop.jpg";
import macaron from "./assets/image-macaron-desktop.jpg";
import tiramisu from "./assets/image-tiramisu-desktop.jpg";
import baklva from "./assets/image-baklava-desktop.jpg";
import pie from "./assets/image-meringue-desktop.jpg";
import cake from "./assets/image-cake-desktop.jpg";
import brownie from "./assets/image-brownie-desktop.jpg";
import cotta from "./assets/image-panna-cotta-desktop.jpg";
function Shop() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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

      <Card
        waffleimage={cake}
        product="Cake"
        productdefn="Red Velvet Cake"
        price={4.5}
      />

      <Card
        waffleimage={brownie}
        product="Brownie"
        productdefn="Salted Caramel Brownie"
        price={5.5}
      />

      <Card
        waffleimage={cotta}
        product="Panna cotta"
        productdefn="Vanilla Panna Cotta"
        price={6.5}
      />
    </div>
  );
}

export default Shop;
