import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../css/productdetails/productdetails.css";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
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
                            PRICE: <span>{`Kes ${product.price}`}</span>
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
