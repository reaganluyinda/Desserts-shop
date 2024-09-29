import Cart from "./Cart";
import Header from "./Header";
import Shop from "./shop";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 px-20 pt-10">
        <Header />
        <div className="flex">
          <Shop />
          <div className="flex-1">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
