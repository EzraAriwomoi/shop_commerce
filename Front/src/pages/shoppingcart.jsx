/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
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
  product_id,
  image_url,
  product_name,
  product_price,
  quantity: initialQuantity, // Use initial quantity from props
  fetchCartItems,
  ...props
}) {
  const [quantity, setQuantity] = useState(initialQuantity); // Use initialQuantity as initial state
  const [subtotal, setSubtotal] = useState(parseFloat(product_price * initialQuantity).toFixed(2));

  const increaseQuantity = async () => {
    const newQuantity = quantity + 1;
    await updateQuantity(newQuantity);
    setQuantity(newQuantity);
  };

  const decreaseQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      await updateQuantity(newQuantity);
      setQuantity(newQuantity);
    }
  };

  const updateQuantity = async (newQuantity) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/cart/update`, {
        product_id: product_id,
        quantity: newQuantity,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      fetchCartItems(); // Refresh cart items after update
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  useEffect(() => {
    const newSubtotal = (parseFloat(product_price) * quantity).toFixed(2);
    setSubtotal(newSubtotal);
  }, [quantity, product_price]);

  const handleRemoveItem = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`http://localhost:5000/cart/remove/${product_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Item removed successfully");
        fetchCartItems(); // Fetch updated cart items after deletion
      } else {
        console.error("Failed to remove item:", response.data.error);
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };  

  return (
    <div {...props} className={`${props.className} flex-container`}>
      <div className="flex-full">
        <img src={image_url} alt="image" className="image-cover" />
        <div className="flex-column-start">
          <div className="flex-start-between">
            <h5 className="h5txt">{product_name}</h5>
            <button
              className="close-button"
              aria-label="Close"
              onClick={handleRemoveItem}
            >
              {CloseIcon}
            </button>
          </div>
          <p className="kescountertext">Kes. {product_price}</p>
          <div className="bdy">
            <div className="divhead">
              <h6 className="oneqtytext">
                {quantity} qty
              </h6>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={increaseQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="10"
                    height="10"
                  >
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                </button>
                <button className="quantity-button" onClick={decreaseQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="10"
                    height="10"
                  >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </button>
              </div>
            </div>
            <h5 className="kescountertext1">Kes. {subtotal}</h5>
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
      console.log("Cart items fetched:", data);
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += parseFloat(item.product_price) * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  // Function to calculate total
  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discount = subtotal * (6.12 / 100); // Example discount percentage
    const shipping = 500.00; // Example shipping cost
    return (subtotal + shipping - discount).toFixed(2);
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
                  product_id={item.product_id}
                  image_url={item.image_url}
                  product_name={item.product_name}
                  product_price={item.product_price}
                  quantity={item.quantity} // Pass quantity to maintain state
                  fetchCartItems={fetchCartItems}
                />
              ))}
            </div>
          </div>
          <div className="order-summ">
            <h2>Order summary</h2>
            <div className="div-sub">
              <div className="sub">
                <p>Subtotal</p>
                <p>Kes: {calculateSubtotal()}</p>
              </div>
              <div className="sub">
                <p>Shipping</p>
                <p>Kes: 500.00</p>
              </div>
              <div className="sub">
                <p>Discount (6.12%)</p>
                <p>Kes: {(parseFloat(calculateSubtotal()) * (6.12 / 100)).toFixed(2)}</p>
              </div>
              <div className="sub">
                <h3 className="self-end">Total</h3>
                <h4 className="cash">Kes: {calculateTotal()}</h4>
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
