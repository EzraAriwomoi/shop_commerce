// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import "../css/productdetails/productdetails.css";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addingToCart, setAddingToCart] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/products/products/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const addToCart = async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert('You need to be logged in to add items to the cart.');
            return;
        }

        setAddingToCart(true);
        
        try {
            const user_id = localStorage.getItem('user_id'); // Assuming user_id is stored in localStorage

            const response = await fetch(`http://127.0.0.1:5000/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ user_id, product_id: product.id, quantity: 1 }), // Use fetched product details
            });

            if (!response.ok) {
                throw new Error(`Failed to add to cart. HTTP status ${response.status}`);
            }

            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add to cart.');
        } finally {
            setAddingToCart(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <NavBar />
            <div className="product-details">
                <div className="pd-cont">
                    <section className="pd-image-cont">
                        <img src={product.image_url} alt={product.name} />
                    </section>
                    <section className="pd-details">
                        <h1>{product.name}</h1>
                        <h2>
                            PRICE: <span>Kes {product.price}</span>
                        </h2>
                        <p>
                            {product.description}
                        </p>
                        <button onClick={addToCart} disabled={addingToCart}>
                            {addingToCart ? 'Adding...' : 'Add to Cart'}
                        </button>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
