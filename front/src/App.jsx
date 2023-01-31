import "./App.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Eshop from "./Pages/Eshop";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/eshop" element={<Eshop />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/*<Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
