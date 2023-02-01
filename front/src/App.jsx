import "./App.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Cart } from "./Pages/Cart/Cart";
import { Shop } from "./Pages/Shop/Shop";
import { ShopContextProvider } from "./Context/ShopContextProvider";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
