// ProductListing.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../pages/components/productcard/productcard";
import { Frame } from "../pages/components/frame";
import { Frame2 } from "../pages/components/frame";
import "../css/productlistingcss/productlisting.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Component from "../components/slide";

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/products/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <>
            <NavBar />
            <div className="product-list-page">
                <div className="div-2">
                    <div>
                        <Frame className="" />
                        <Frame2 className="" />
                    </div>
                    <div className="divider1"></div>
                    <div className="frame-2">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                productId={product.id}  // Pass productId here
                                productName={product.name}
                                price={product.price}
                                imageUrl={product.image_url}
                            />
                        ))}
                    </div>
                    {/* Component integration */}
                    <div className="frame-5">
                        <Component />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListing;
