import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/shoppingcartcss/shoppingcart.css";
import "../css/shoppingcartcss/details.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import axios from 'axios';

const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width="16"
    height="16"
    className="close-icon"
  >
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

function ShoppingCartItems({
  image_url,
  product_name,
  product_price,
  total,
  ...props
}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    // eslint-disable-next-line react/prop-types
    <div {...props} className={`${props.className} flex-container`}>
      <div className="flex-full">
        <img src={image_url} alt="image" className="image-cover" />
        <div className="flex-column-start">
          <div className="flex-start-between">
            <h5 className="h5txt">{product_name}</h5>
            <button
              className="close-button"
              aria-label="Close"
              onClick={() => console.log("Close button clicked")}
            >
              {CloseIcon}
            </button>
          </div>
          <p className="kescountertext">{product_price}</p>
          <div className="bdy">
            <div className="divhead">
              <h6 className="oneqtytext">{quantity} qty</h6>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={increaseQuantity}>
                  +
                </button>
                <button className="quantity-button" onClick={decreaseQuantity}>
                  -
                </button>
              </div>
            </div>
            <h5 className="kescountertext1">{total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShoppingcartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/cart/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }
      const data = await response.json();
      console.log("Cart items fetched:", data); // Log the fetched cart items
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <Helmet>
        <title>Shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <NavBar />
      <div className="containerA">
        <div className="fdiv">
          <p className="text-stylingn dot">My Cart</p>
          <p className="itms">{cartItems.length} items selected</p>
        </div>
        <div className="divider"></div>
        <div className="container2">
          <div className="container3">
            <div className="container4">
              {cartItems.map((item, index) => (
                <ShoppingCartItems
                  key={`cart-item-${index}`}
                  image_url={item.image_url}
                  product_name={item.product_name}
                  product_price={`Kes: ${item.product_price}`}
                  total={`Kes. ${item.total}`}
                />
              ))}
            </div>
          </div>
          <div className="order-summ">
            <h2>Order summary</h2>
            <div className="div-sub">
              <div className="sub">
                <p>Subtotal</p>
                <p>Kes: {calculateSubtotal(cartItems)}</p>
              </div>
              <div className="sub">
                <p>Shipping</p>
                <p>Kes: 500.00</p>
              </div>
              <div className="sub">
                <p>Discount (6.12%)</p>
                <p>Kes: {calculateDiscount(cartItems)}</p>
              </div>
              <div className="sub">
                <h3 className="self-end">Total</h3>
                <h4 className="cash">Kes: {calculateTotal(cartItems)}</h4>
              </div>
            </div>
            <button className="payment">
              <img src="images/img_arrowright.svg" alt="arrow_right" className="arrow-rght" />
              Proceed to payment
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="Dis">
          <div className="discode">
            <h1 className="txtheading">Discount code</h1>
            <button className="applybtn">Apply</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

// Helper functions to calculate subtotal, discount, and total
function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price, 0).toFixed(2);
}

function calculateDiscount(items) {
  const subtotal = calculateSubtotal(items);
  const discountPercentage = 6.12; // Example discount percentage
  return (subtotal * (discountPercentage / 100)).toFixed(2);
}

function calculateTotal(items) {
  const subtotal = parseFloat(calculateSubtotal(items));
  const discount = parseFloat(calculateDiscount(items));
  const shipping = 500.00; // Example shipping cost
  return (subtotal + shipping - discount).toFixed(2);
}
