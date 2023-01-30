import "./App.scss";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
