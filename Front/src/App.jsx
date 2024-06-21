import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import CustomerAuth from "./pages/customerauth";
import MerchantAuth from "./pages/merchantauth";
import HomePage from "./pages/homepage";
// import NavBar from "./components/layout/NavBar";
import Shoppingcart from "./pages/shoppingcart";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/merchantauth" element={<MerchantAuth />} />
        <Route path="/customerauth" element={<CustomerAuth />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
      </Routes>
    
    </Router>
  );
}

export default App;
