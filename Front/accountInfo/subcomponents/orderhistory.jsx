// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "../../../css/myaccount/orderhistory.css";

const OrderHistory = () => {
    // Sample order history data
    const orders = [
        {
            image: 'Jesus Bangles Bracelet for Women Stainless Steel Gold Color Luxury Bracelets 2024 Free Shipping Jewelry pulseras mujer bijoux - B1261G.jpeg',
            date: '2024-07-01',
            productName: 'Product A',
            price: 'price',
            details: 'Details about Product A'
        },
        {
            image: 'handbrace.jpg',
            date: '2024-06-30',
            productName: 'Product B',
            price: 'price',
            details: 'Details about Product B'
        },
        {
            image: 'gor.jpg',
            date: '2024-06-29',
            productName: 'Product C',
            price: 'price',
            details: 'Details about Product C'
        },
    ];

    // State to manage which order's details are shown
    const [expandedOrderIndex, setExpandedOrderIndex] = useState(null);

    const toggleDetails = (index) => {
        setExpandedOrderIndex(expandedOrderIndex === index ? null : index);
    };

    return (
        <div className="order-history">
            <h2 className='ord'>Order History</h2>
            {orders.map((order, index) => (
                <div key={index} className="order-item">
                    <div className="order-summary">
                        <img src={order.image} alt={`Product ${order.productName}`} className="order-image" />
                        <span>{order.date}</span>
                        <span>{order.productName}</span>
                        <span>{order.price}</span>
                        <button onClick={() => toggleDetails(index)} className="details-button">
                            {expandedOrderIndex === index ? '▲' : '▼'}
                        </button>
                    </div>
                    {expandedOrderIndex === index && (
                        <div className="order-details">
                            <p>{order.details}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
