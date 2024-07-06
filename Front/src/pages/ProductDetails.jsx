import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../css/productdetails/productdetails.css";
import "../pages/components/productcard/productcard";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                        <button>Add to Cart</button>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
