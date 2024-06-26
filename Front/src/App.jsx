import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import CustomerAuth from "./pages/customerauth";
// import MerchantAuth from "./pages/merchantauth";
import HomePage from "./pages/homepage";
// import NavBar from "./components/layout/NavBar";
import ProductDetails from "./pages/ProductDetails";
import ShoppingcartPage from "./pages/shoppingcart";
import ProductListPage from "./pages/productlisting";

function App() {
  return (
    <Router>
      <main className="app">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/auth" element={<CustomerAuth />} />
          <Route path="/productdetails/:productName" element={<ProductDetails />} />
          <Route path="/shoppingcart" element={<ShoppingcartPage/>} />
          <Route path="/products" element={<ProductListPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
