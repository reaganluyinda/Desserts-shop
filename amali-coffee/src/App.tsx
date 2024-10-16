import Cart from "./Cart";
import ShopContextProvider from "./context/shop-context";
import Header from "./Header";
import Shop from "./Shop";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 px-20 pt-10">
        <ShopContextProvider>
          <Header />
          <div className="flex flex-wrap ">
            <Shop />
            <div className="flex-1">
              <Cart />
            </div>
          </div>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
