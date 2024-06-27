// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from '../pages/components/productcard/productcard';
import { Frame } from "../pages/components/frame";
import { Frame2 } from "../pages/components/frame";
import "../css/productlistingcss/productlisting.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const products = [
  {
    productName: "Necklace",
    price: 2500,
    imageUrl: "necklace.jpeg"
  },
  {
    productName: "Jesus Bangles Bracelet",
    price: 2000,
    imageUrl: "Jesus Bangles Bracelet for Women Stainless Steel Gold Color Luxury Bracelets 2024 Free Shipping Jewelry pulseras mujer bijoux - B1261G.jpeg"
  },
  {
    productName: "Silver ring",
    price: 2000,
    imageUrl: "ring.jpeg"
  },
  {
    productName: "Handbracelet",
    price: 2000,
    imageUrl: "handbrace.jpg"
  },
  {
    productName: "Basket",
    price: 11000,
    imageUrl: "Doghouse.jpg"
  },
  {
    productName: "Rings Butterfly",
    price: 2500,
    imageUrl: "2pcs_set Rings Butterfly All-match Butterfly Hollow Simple Couple Rings Alloy.jpeg"
  },
  {
    productName: "Buffalo artifact",
    price: 7100,
    imageUrl: "gor.jpg"
  },
  {
    productName: "Calabash",
    price: 6500,
    imageUrl: "cal.jpg"
  },
  // Add more products as needed
];

const ProductListing = () => (
    <div>
      <div className="product-list-page">
      <div className="div-2">
        <NavBar />
        <Frame className="" />
        <Frame2 className="" />
        <div className="divider1"></div>

        <div className="frame-2">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

        <div className="frame-5">
          <div className="frame-6">
            <div className="text-wrapper-5">1</div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-5">2</div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-5">3</div>
          </div>
          <div className="text-wrapper-6">....</div>
          <div className="frame-6">
            <div className="text-wrapper-5">4</div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
    </div>
  );
export default ProductListing;


