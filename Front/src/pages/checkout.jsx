/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/checkout/checkout.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import axios from 'axios';

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/cart/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status !== 200) {
                throw new Error("Failed to fetch cart items");
            }
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        cartItems.forEach(item => {
            subtotal += parseFloat(item.product_price) * item.quantity;
        });
        return subtotal.toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const discount = subtotal * (6.12 / 100);
        const shipping = 500.00;
        return (subtotal + shipping - discount).toFixed(2);
    };

    return (
        <>
            <Helmet>
                <title>Checkout</title>
                <meta name="description" content="" />
            </Helmet>
            <NavBar />
            <div className="containerA">
                <div className="fdiv">
                    <p className="text-stylingn dot">My Orders</p>
                </div>
                <div className="divider"></div>
                <div className="container2">
                    <div className="container5">
                        <div className="checkout-container">
                            <div className="payment-info">
                                <h2>Payment Information</h2>
                                <div className="payment-container">
                                    <div className="payment-header">
                                        <p className="payment-description">All transactions are secure and encrypted.</p>
                                    </div>
                                    <div className="payment-methods">
                                        <div className="payment-method">
                                            <fieldset id="basic">
                                                <legend className="payment-legend">Choose a payment method</legend>
                                                <div className="payment-options">
                                                    <div className="payment-option">
                                                        <label htmlFor="basic-creditCards" className="payment-label">
                                                            <div className="r-box">
                                                                <div className="payment-radio">
                                                                    <input type="radio" id="basic-creditCards" name="basic" className="payment-input" />
                                                                </div>
                                                                <div className="payment-option-details">
                                                                <span className="payment-option-title">Credit card</span>
                                                                <div className="payment-icons">
                                                                    <img alt="VISA" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" width="38" height="24" className="payment-icon" />
                                                                    <img alt="MASTERCARD" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae9ceec48b1dc489596c.svg" width="38" height="24" className="payment-icon" />
                                                                    <img alt="AMEX" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f11b90c2972f3811f2d5.svg" width="38" height="24" className="payment-icon" />
                                                                    <img alt="DISCOVER" src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/4cde67b4ecfa33d21851.svg" width="38" height="24" className="payment-icon" />
                                                                    <button type="button" aria-pressed="false" className="more-button">+4</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </label>
                                                        <div id="basic-creditCards-collapsible" className="collapsible-content">
                                                            <div className="payment-details">
                                                                <div className="payment-field">
                                                                    <label htmlFor="number" className="field-label">Card number</label>
                                                                    <div className="field-container">
                                                                        <iframe className="card-fields-iframe" title="Field container for: Card number"></iframe>
                                                                        <span className="field-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.5 6.3c0-2.298 1.131-4.9 3.5-4.9s3.5 2.602 3.5 4.9m-8.4.47v5.36c0 .26.21.47.47.47h8.86c.26 0 .47-.21.47-.47V6.77a.47.47 0 0 0-.47-.47H2.57a.47.47 0 0 0-.47.47"></path></svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="payment-field">
                                                                    <label htmlFor="expiry" className="field-label">Expiration date (MM / YY)</label>
                                                                    <div className="field-container">
                                                                        <iframe className="card-fields-iframe" title="Field container for: Expiration date (MM / YY)"></iframe>
                                                                    </div>
                                                                </div>
                                                                <div className="payment-field">
                                                                    <label htmlFor="verification_value" className="field-label">Security code</label>
                                                                    <div className="field-container">
                                                                        <iframe className="card-fields-iframe" title="Field container for: Security code"></iframe>
                                                                        <button type="button" aria-label="More information" className="info-button">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-label="More information"><circle cx="7" cy="7" r="5.6"></circle><path d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"></path><circle cx="7" cy="9.7" r="0.1"></circle></svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="payment-field">
                                                                    <label htmlFor="name" className="field-label">Name on card</label>
                                                                    <div className="field-container">
                                                                        <iframe className="card-fields-iframe" title="Field container for: Name on card"></iframe>
                                                                        <button type="button" aria-label="Clear" className="clear-button">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L7 6.293l1.646-1.647a.5.5 0 0 1 .708.708L7.707 7l1.647 1.646a.5.5 0 0 1-.708.708L7 7.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 7 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Add other payment methods here if needed */}
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-summary">
                                <h2>Order Summary</h2>
                                {cartItems.map((product) => (
                                    <div key={product.product_id} className="product-item">
                                        <img src={product.image_url} alt={`Image of ${product.product_name}`} className="product-image" />
                                        <div className="overal-products">
                                            <span className="productname">{product.product_name}</span>
                                            <span className="product-qty">{` x${product.quantity}`}</span>
                                            <span className="product-price">{`Kes. ${product.product_price}`}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="cost-summary">
                                    <h4>Cost Summary</h4>
                                    <div className="cost-item">
                                        <span>Subtotal</span>
                                        <span>{`Kes. ${calculateSubtotal()}`}</span>
                                    </div>
                                    <div className="cost-item">
                                        <span>Shipping</span>
                                        <span>Enter shipping address</span>
                                    </div>
                                    <div className="cost-item">
                                        <span>Total</span>
                                        <span>{`Kes. ${calculateTotal()}`}</span>
                                    </div>
                                </div>
                                <div className="divide-bottom"></div>
                                <button type="submit" className="pay-now-button">Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
