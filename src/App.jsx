import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Cartpage from "./Pages/Cartpage";
import Productpage from "./Pages/Productpage";
import Wishlists from "./Pages/Wishlists";
import Products from "./Pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import Profilepage from "./Pages/Profilepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Router>
          <div>
            <Toaster />
          </div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/product" element={<Productpage />} />
            <Route path="/wishlists" element={<Wishlists />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
