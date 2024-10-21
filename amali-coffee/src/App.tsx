import { useState } from "react";
import Cart from "./Cart";
import ShopContextProvider from "./context/shop-context";
import Header from "./Header";
import Modal from "./Modal";

import Shop from "./Shop";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <ShopContextProvider>
        <div className="min-h-screen bg-slate-100 px-20 pt-10">
          <Header />
          <div className="flex flex-wrap ">
            <Shop />
            <div className="flex-1">
              <Cart handleShowModal={handleShowModal} />
            </div>
            {showModal && <Modal handleShowModal={handleShowModal} />}
          </div>
        </div>
      </ShopContextProvider>
    </>
  );
}

export default App;
